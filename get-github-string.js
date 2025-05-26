// Map some common languages to typical file extensions
const languageExtensions = {
    JavaScript: ['js', 'jsx', 'mjs', 'cjs', 'ts', 'typescript'],
    AutoHotkey: ['ahk'],
    Python: ['py'],
    Ruby: ['rb'],
    Java: ['java'],
    Go: ['go'],
    C: ['c'],
    "C++": ['cpp', 'cc', 'cxx', 'hpp', 'hh', 'hxx'],
    PHP: ['php'],
    Shell: ['sh', 'bash'],
    ActionScript: ['as'],
    Assembly: ['i', 'asm'],
    Bash: ['sh', 'bash'],
    BASIC: ['bas'],
    Batch: ['bat', 'cmd'],
    Brainfuck: ['bf'],
    'C#': ['cs'],
    COBOL: ['cbl', 'cob'],
    CoffeeScript: ['coffee'],
    CSS: ['css'],
    D: ['d'],
    Dart: ['dart'],
    Docker: ['dockerfile', 'dockerignore'],
    Fortran: ['f90', 'f', 'for', 'f03', 'f08', 'F'],
    'G-Code': ['gcode', 'nc'],
    GraphQL: ['graphql', 'gql'],
    Groovy: ['groovy'],
    Haskell: ['hs'],
    HTML: ['html', 'htm'],
    Kotlin: ['kt', 'kts'],
    TeX: ['tex'],
    Lisp: ['lisp', 'lsp', 'cl'],
    Lua: ['lua'],
    Makefile: ['makefile', 'Makefile', 'mk'],
    Markdown: ['md', 'markdown'],
    MatLab: ['m'],
    Nix: ['nix'],
    'Objective-C': ['m'],
    OCaml: ['ml', 'mli'],
    Pascal: ['pas', 'pp'],
    Perl: ['pl', 'pm'],
    Powershell: ['ps1', 'psm1', 'psd1'],
    R: ['r'],
    Rust: ['rs'],
    Scala: ['scala'],
    Smalltalk: ['st'],
    SQL: ['sql'],
    Swift: ['swift'],
    'VB.net': ['vb'],
    Verilog: ['v', 'vh'],
    'Visual Basic': ['vb', 'vba'],
    WebAssembly: ['wasm'],
    Zig: ['zig'],
      "ASP.NET": ['aspx', 'ascx', 'ashx', 'asmx', 'config'],
  Bibtex: ['bib', 'bibtex'],
  CSV: ['csv'],
  Carbon: ['carbon'],
  Checksum: ['cksum', 'sha256','sha1', 'sha2','sha3', 'sha224', 'sha384', 'sha512','md2', 'md4', 'md5', 'crc32'],
  CUDA: ['cu', 'cuh'],
  "E-mail File": ['eml', 'msg', 'mbox'],
  GDScript: ['gd'],
  Handlebars: ['hbs', 'handlebars'],
  JSON: ['json'],
  Jinja: ['j2', 'jinja', 'jinja2', 'tpl'],
  JupyterNotebook: ['ipynb'],
  Lean: ['lean', 'hlean'],
  Liquid: ['liquid'],
  Mathemtica: ['nb', 'wl', 'nbp', 'm', 'wlt'],
  Metal: ['metal'],
  Processing: ['pde'],
  Ragel: ['rl', 'ragel'],
  Regex: ['regex', 're', 'exp', 'regexp'],
  "Rich Text Format": ['rtf'],
  Stata: ['do', 'dta', 'ado', 'doh', 'matah', 'mata', 'ihlp', 'sthlp'],
  TOML: ['toml'],
  "Unix Assembly": ['s', 'asm'],
  Vue: ['vue'],
  YAML: ['yaml', 'yml']
};


// create the <select> on the fly
function createSelect() {
    let select = document.getElementById('programmingLanguages');
    let initialOpt = document.createElement('option');
    initialOpt.value = "";
    initialOpt.innerHTML = "(Choose a Language)";
    select.appendChild(initialOpt);
    for (var i = 0; i < languages.length; i++) {
        let opt = document.createElement('option');
        opt.value = languages.sort()[i];
        opt.innerHTML = languages.sort()[i];
        select.appendChild(opt);
    }
}

const shf = "EIj4YrTsGS567CWUGhgbzDEsIoAikfcAn6h0akuedgGZNHTA91zUedEp3o8_aFwGgZkN7jmd0AZGSDUA11_tap_buhtig"

const output = document.getElementById('operating-table');
let fileSearchCount = 0; // Counter for the file search message
let fileSearchMessageIndex = -1; // Track the index of our file search message

// New helper to get current difficulty selection
function getDifficultySelection() {
    const radios = document.getElementsByName('difficulty');
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return "Classic"; // default fallback
}


// i hate you i hate you i hate you i hate you i hate you es6
export const languages = Object.keys(languageExtensions);
export let language = "";
export let keyyy = shf.split("").reverse().join("");
export let repo = "";
export let dupletLines = new Array();
export let selectedFile = null;
export async function getSnippet(lang) {
    try {
        selectedFile = null;
        language = lang;

        reveal = document.getElementById('reveal');
        reveal.style.display = 'none';

        output.innerHTML = "<span style='color: #fffbd6'> If this textbox freezes for more than 5 seconds, open your browser console and check for errors.</span>\n\nLoading code snippet...";
        output.innerText += "\nSearching repositories for language...";
        let repos = [];
        let attempts = 0;

        while (repos.length === 0 && attempts < 5) {
            const page = 1 + getRandomInt(5);
            try {
                repos = await searchRepos(language, page);
            } catch (e) {
                console.warn('Error fetching repos:', e.message);
            }
            attempts++;
        }

        if (repos.length === 0) {
            console.error('No repositories found.');
            return;
        }

        repo = repos[getRandomInt(repos.length)];
        const owner = repo.owner.login;
        const repoName = repo.name;

        const dirQueue = [''];
        let selectedFiles = []; // Will hold up to 3 files of suitable language

while (dirQueue.length > 0 && selectedFiles.length === 0) {
    const currentPath = dirQueue.shift();
    let contents = [];

    try {
        contents = await fetchDirectoryContents(owner, repoName, currentPath);
    } catch (e) {
        console.warn(`Failed to fetch contents of ${currentPath}: ${e.message}`);
        continue;
    }

    const langFiles = filterFilesByLanguage(contents, language);
    fileSearchCount++;

    const fileSearchMessage = `\nFinding matching language file in repository (${fileSearchCount})...`;
    let currentText = output.innerText;

    if (fileSearchMessageIndex !== -1) {
        let errorLines = currentText.split('\n');
        errorLines[fileSearchMessageIndex] = `Finding matching language file in repository (${fileSearchCount})...`;
        output.innerText = errorLines.join('\n');
    } else {
        output.innerText += fileSearchMessage;
        fileSearchMessageIndex = output.innerText.split('\n').length - 1;
    }

    if (langFiles.length > 0) {
        fileSearchCount = 0;
        fileSearchMessageIndex = -1;
        // Pick up to 3 random files from langFiles
        const shuffledFiles = langFiles.sort(() => 0.5 - Math.random());
        selectedFiles = shuffledFiles.slice(0, 3);
        break;
    }

    const subDirs = filterDirectories(contents);

    // if at root level, prioritize /src
    if (currentPath === '') {
        // if src exists
        const srcDirObj = subDirs.find(dir => dir.name.toLowerCase() === 'src');
        if (srcDirObj) {
            console.log("src found, queued up")
            // Enqueue src directory first
            dirQueue.unshift(srcDirObj.path);
            // Enqueue the rest (except src)
            for (const dir of subDirs) {
                if (dir.name.toLowerCase() !== 'src') {
                    dirQueue.push(dir.path);
                }
            }
        } else {
            console.log("no src found")
            // No src directory, enqueue all normally
            for (const dir of subDirs) {
                dirQueue.push(dir.path);
            }
        }
    } else {
        // Normal behavior, enqueue all sub dirs
        for (const dir of subDirs) {
            dirQueue.push(dir.path);
        }
    }
}


        if (selectedFiles.length === 0) {
            fileSearchCount = 0;
            fileSearchMessageIndex = -1;
            output.innerHTML = `<span style='color: red'>'Error:', No ${language} source files found in the repository.</span>`;
            console.error(`No ${language} source files found in the repository.`);
            return;
        }

        // New difficulty reading logic
        const difficulty = getDifficultySelection();
        let linesToSample;

        switch (difficulty) {
            case "Easy":
                linesToSample = 15;
                break;
            case "Hard":
                linesToSample = 7;
                break;
            case "Classic":
            default:
                linesToSample = 10;
        }

        let snippetLines = [];
        let snippetRange = "";
        let successfulFile = null;

        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            output.innerText += `\nFetching file content (try ${i + 1} of ${selectedFiles.length})...`;

            let content;
            try {
                content = await fetchFileContent(file);
            } catch(e) {
                console.warn(`Failed to fetch file content. Don't panic, we're trying one of the backups.`);
                continue; // Try next file
            }

            output.innerHTML += `\nPicking <span style='color: #a24a4b'>${linesToSample}</span> consecutive lines...`;

            const [lines, range] = pickConsecutiveLines(content, linesToSample);

            if (!lines || lines.length === 0 || lines.filter(line => line.trim() !== '').length < linesToSample) {
                output.innerText += `\nFile did not have enough non-empty lines, trying next file...`;
                continue; // next file
            }

            // If we get here, snippet selection succeeded
            snippetLines = lines;
            snippetRange = range;
            successfulFile = file;
            dupletLines = [snippetLines, snippetRange];
            selectedFile = file;
            break;
        }

        if (!successfulFile) {
            output.innerHTML += `<span style='color: red'>\nError: None of the selected ${language} files contained enough usable code lines.</span>`;
            console.error(`None of the selected ${language} files contained enough usable code lines.`);
            return;
        }

        output.innerText += "\nDone!";
        output.innerText = snippetLines.join('\n');

    } catch (error) {
        fileSearchCount = 0;
        fileSearchMessageIndex = -1;
        console.error('Error:', error.message);
        output.innerHTML = `<span style='color: red'>'Error:', ${error.message}</span>`;
    }
}


async function searchRepos(language, page = 1) {
    const params = new URLSearchParams({
        q: `language:${language}`,
        sort: 'stars',
        order: 'desc',
        per_page: '30',
        page: page.toString()
    });
    const url = `https://api.github.com/search/repositories?${params.toString()}`;
    const res = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${keyyy}`
        }
    });
    if (!res.ok) throw new Error(`Failed to search repos: ${res.status} ${res.statusText}`);
    const data = await res.json();
    return data.items;
}

async function fetchDirectoryContents(owner, repo, path = '') {
    let url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const res = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${keyyy}`
        }
    });
    if (!res.ok) throw new Error(`Failed to fetch contents: ${res.status} ${res.statusText}`);
    return await res.json();
}

function filterFilesByLanguage(files, language) {
    const exts = languageExtensions[language];
    if (!exts) return [];
    return files.filter(file => {
        if (file.type !== 'file') return false;
        const ext = file.name.split('.').pop().toLowerCase();
        return exts.includes(ext);
    });
}

// Filter directories from contents
function filterDirectories(files) {
    return files.filter(file => file.type === 'dir');
}

// Fetch raw content of a file
async function fetchFileContent(file) {
    if (!file.download_url) throw new Error('No download_url');
    const res = await fetch(file.download_url);
    if (!res.ok) throw new Error(`Failed to fetch file content: ${res.status} ${res.statusText}`);
    return await res.text();
}

function maskItems(text, mask) {
    if (Array.isArray(text)) {
        text = text.join("ʥʥʥʥʥ");
    }

    if (!text || !mask || mask.length === 0) {
        return text; // Handle empty input gracefully
    }

    const escapedTerms = mask.map(term => term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));

    const boundaryBefore = "(^|[ \\t\\n\\.\\,\\;\\:\\(\\)\\[\\]\\{\\}\\<\\>\\-\\_\\\"'])";
    const boundaryAfter  = "($|[ \\t\\n\\.\\,\\;\\:\\(\\)\\[\\]\\{\\}\\<\\>\\-\\_\\\"'])";

    const regex = new RegExp(
        `${boundaryBefore}(?:${escapedTerms.join('|')})${boundaryAfter}`,
        'gi'
    );

    const maskedText = text.replace(regex, (match, g1, g2) => {
        return g1 + '█'.repeat(match.length - g1.length - g2.length) + g2;
    });

    return maskedText.split("ʥʥʥʥʥ");
}

function normalizeIndentation(lines) {
    const indentLengths = lines
        .filter(line => line.trim().length > 0) // skip empty lines
        .map(line => {
            const match = line.match(/^(\s*)/);
            return match ? match[1].length : 0;
        });

    if (indentLengths.length === 0) {
        return lines;
    }

    // find min indent among all non-empty lines
    const minIndent = Math.min(...indentLengths);

    // hedge trimmin
    return lines.map(line => {
        if (line.trim().length === 0) {
            // empty line
            return line;
        }
        // Remove exactly minIndent characters from start
        // assuming indent is by characters (could be space or tab)
        return line.slice(minIndent);
    });
}

function charSimilarity(strings) {
    if (!strings || strings.length === 0) {
        return true; // Empty array is considered consistent
    }

    const firstCharacters = strings.map(str => {
        if (!str) return null; // Handle empty strings if needed (optional)
        return str.charAt(0);
    });

    const validFirstCharacters = firstCharacters.filter(char => char !== null && char !== '' && !/\s/.test(char));

    if (validFirstCharacters.length === 0) {
        return true; // if the array contains either null or empty strings or whitespace
    }

    const leadingChar = validFirstCharacters[0]; // The first valid leading character.

    let count = 0;
    for (const char of validFirstCharacters) {
        if (char === leadingChar) {
            count++;
        }
    }


    const percentage = (count / validFirstCharacters.length) * 100;

    return percentage >= 60;
}

// Pick 10 consecutive lines from file content (random offset)
function pickConsecutiveLines(text, count) {
    const maskedTerms = [language, ...languageExtensions[language]];
    const lines = maskItems(normalizeIndentation(text.split(/\r?\n/)), maskedTerms);
    if (lines.length === 0) return [];

    const totalNonEmpty = lines.filter(line => line.trim() !== '').length;
    if (totalNonEmpty <= count) {
        // Not enough non-empty lines: return all
        return [lines, `1 - ${lines.length}`];
    }

    let attempts = 0;
    while (attempts < 20) {
        const startIndex = getRandomInt(lines.length);
        let endIndex = startIndex;
        let nonEmptyCount = 0;

        while (endIndex < lines.length && nonEmptyCount < count) {
            if (lines[endIndex].trim() !== '') nonEmptyCount++;
            endIndex++;
        }

        if (nonEmptyCount < count) {
            attempts++;
            continue;
        }

        const segment = lines.slice(startIndex, endIndex);

        if (!charSimilarity(segment)) {
            return [segment, `${startIndex + 1} - ${endIndex}`];
        }

        attempts++;
    }

    // fallback: linear search from beginning
    for (let i = 0; i < lines.length; i++) {
        let endIndex = i;
        let nonEmptyCount = 0;
        while (endIndex < lines.length && nonEmptyCount < count) {
            if (lines[endIndex].trim() !== '') nonEmptyCount++;
            endIndex++;
        }
        if (nonEmptyCount >= count) {
            return [lines.slice(i, endIndex), `${i + 1} - ${endIndex}`];
        }
    }

    // fallback return all
    return [lines, `1 - ${lines.length}`];
}


export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// This is a "self-executing" function to run on initial load
(async () => {
    createSelect();

    // TODO: UPDATE THIS WHEN ADDING NEW LANGS!!!!!!!!!!
    language = languages[getRandomInt(languages.length)];
    // await getSnippet(language); // init
})();