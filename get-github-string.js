let languageExtensions = new Array();
let languageList = {
    0: {
        Assembly: ["i", "asm", "inc", "a51", "nas", "nasm", "s"],
        "JavaScript": [
            "javascript",
            "js",
            "jsx",
            "mjs",
            "bones",
            "sjs",
            "ssjs",
            "es",
            "es6",
            "cjs",
            "ts",
            "tsx",
            "mts",
            "cts",
            "typescript",
        ],
        Python: ["py", "cgi", "py3", "pyde", "pyi", "rpy", "tac", "xpy"],
        Java: ["java", "jav", "jsh"],
        PHP: ["php", "aw", "ctp", "fcgi", "inc", "php3", "php4", "php5", "phps", "phpt"],
        Regex: ["regex", "re", "exp", "regexp"],
        SQL: ["sql", "cql", "ddl", "inc", "mysql", "prc", "tab", "udf", "viw", "pgsql"],
        C: ["c", "h", "cats", "h.in", "idc"],
        Powershell: ["ps1", "psm1", "psd1"],
    },
    1: {
        Shell: ["sh", "bash", "bats", "cgi", "command", "fgci", "ksh", "sh.in", "tool", "trigger", "tmux", "zsh", "zsh-theme"],
        Batch: ["bat", "cmd"],
        COBOL: ["cbl", "cob", "ccp", "cobol", "cpy"],
        "C#": ["cs", "cake", "cs.pp", "csx", "linq"],
        "C++": ["cpp", "cc", "cxx", "hpp", "hh", "hxx", "cp", "cc", "c++", "cppm", "inl", "ino", "ipp", "ixx", "tcc", "tpp", "txx"],
        D: ["d", "di"],
        CoffeeScript: ["coffee", "_coffee", "cjsx", "iced"],
        Dart: ["dart"],
        Haskell: ["hs", "hs-boot", "hsc"],
        Rust: ["rs", "rs.in"],
        Ruby: ["rb", "ru", "ruby", "builder", "eye", "fcgi", "gemspec", "god", "jbuilder", "mspec", "pluginspec", "podspec", "prawn", "rabl", "rake", "rbi", "rbuild", "rbw", "rbx", "spec", "watchr"],
        Go: ["go"],
        "Objective-C": ["m"],
        OCaml: ["ml", "mli", "eliom", "eliomi", "ml4", "mll", "mly"],
        Pascal: ["pas", "pp", "dfm", "dpr", "lpr", "pascal"],
        Perl: ["pl", "pm", "al", "cgi", "perl", "ph", "plx", "psgi", "t"],
        Swift: ["swift"],
    },
    2: {
        R: ["r", "rd", "rsx"],
        BASIC: ["bas"],
        Fortran: ["f90", "f", "for", "f03", "f08", "f77", "F", "fpp"],
        Kotlin: ["kt", "kts", "ktm"],
        Lisp: ["lisp", "lsp", "cl", "asd", "sexp", "podsl", "ny", "l"],
        Lua: ["lua", "nse", "p8", "pd_lua", "rbxs", "rockspec", "wlua"],
        V: ["v", "vsh"],
        "F#": ["fs", "fsi", "fsx", "fsscript"],
        Julia: ["jl"],
        Scala: ["scala", "kojo", "sbt", "sc"],
        Metal: ["metal"],
        Stata: ["do", "dta", "ado", "doh", "matah", "mata", "ihlp", "sthlp"],
        ActionScript: ["as"],
        Erlang: ["erl", "hrl", "app", "app.src", "es", "escript", "xrl", "yrl"],
        Elixir: ["ex", "exs"],
        Crystal: ["cr"],
        Nix: ["nix"],
        Smalltalk: ["st", "cs"],
        Zig: ["zig", "zig.zon"],
        GDScript: ["gd"],
        Vue: ["vue"],
        Groovy: ["groovy", "grt", "gtpl", "gvy"],
        MatLab: ["m", "matlab"],
        Svelte: ["svelte"]
    },
    3: {
        TeX: ["tex", "aux", "bbx", "cbx", "clx", "dtx", "lbx", "ltx", "mkii", "mkvi", "sty", "toc"],
        Nim: ["nim", "nims", "nimble", "nimrod", "nim.cfg"],
        Verilog: ["v", "vh", "veo"],
        // "Visual Basic": ["vb", "vba"],
        VBA: ["vba", "cls", "bas", "frm"],
        ABAP: ["abap"],
        ADA: ["adb", "ads", "ada"],
        Gleam: ["gleam"],
        "VimScript": ["vim", "vba", "vimrc", "vmb"],
        WebAssembly: ["wasm", "wast", "wat"],
        Bibtex: ["bib", "bibtex"],
        CUDA: ["cu", "cuh"],
        Handlebars: ["hbs", "handlebars", "htmlbars"],
        Jinja: ["j2", "jinja", "jinja2", "tpl"],
        "Jupyter Notebook": ["ipynb"],
        Lean: ["lean", "hlean"],
        LiveScript: ["ls", "_ls"],
        Liquid: ["liquid"],
        Mathematica: ["nb", "wl", "nbp", "m", "wlt", "nb", "ma", "mathematica", "mt"],
        Processing: ["pde"],
        Ragel: ["rl", "ragel"],
        AutoHotkey: ["ahk", "ahkl"],
        Brainfuck: ["bf", "b"],
        Dockerfile: ["dockerfile", "containerfile"],
        "G-Code": ["gcode", "nc", "cnc", "gco"],
        LLVM: ["ll"],
        "TI Program": ["8xp", "8xp.txt"],
    },
    4: {
        ASCIIDOC: ["adoc", "asciidoc", "asc"],
        GraphQL: ["graphql", "gql", "graphqls"],
        CSS: ["css"],
        Diff: ["diff", "patch"],
        Turtle: ["ttl"],
        XSLT: ["xsl", "xslt"],
        HTML: ["html", "htm", "hta", "html.hl", "xht", "xhtml"],
        "VTL": ["vtl"],
        "Smarty": ["tpl"],
        Makefile: ["makefile", "Makefile", "mk", "make", "d", "mkfile"],
        Markdown: ["md", "markdown", "livemd", "workbook", "mdwn", "mdown", "mkdown", "ronn", "scd"],
        Gradle: ["gradle"],
        ASP: ["aspx", "ascx", "ashx", "asmx", "config"],
        CSV: ["csv"],
        Checksum: [
            "cksum",
            "sha256",
            "sha1",
            "sha2",
            "sha3",
            "sha224",
            "sha384",
            "sha512",
            "md2",
            "md4",
            "md5",
            "crc32",
        ],
        Email: ["eml", "msg", "mbox", "mail"],
        JSON: ["json", "4DForm", "4DProject", "avsc", "geojson", "gltf", "har", "ice", "JSON-tmLanguage", "json.example", "jsonl", "mcmeta", "sarif", "tact", "tfstate", "tfstate.backup", "topojson", "webapp", "webmanifest", "yy", "yyp"],
        "Rich Text Format": ["rtf"],
        SASS: ["sass", "scss"],
        TOML: ["toml", "pipfile"],
        YAML: ["yaml", "yml", "mir", "reek", "rviz", "syntax", "sublime-syntax", "yaml.sed", "yml.mysql"],
        XML: ["xml", "adml", "admx", "ant", "axaml", "axml", "builds", "ccproj", "ccxml", "clixml", "cproject",
            "cscfg", "csdef", "csl", "csproj", "ct", "depproj", "dita", "ditamap", "ditaval", "dll.config",
            "dotsettings", "filters", "fsproj", "fxml", "glade", "gml", "gmx", "gpx", "grxml", "gst",
            "hzp", "iml", "ivy", "jelly", "jsproj", "kml", "launch", "mdpolicy", "mjml", "mm",
            "mod", "mojo", "mxml", "natvis", "ncl", "ndproj", "nproj", "nuspec", "odd", "osm",
            "pkgproj", "pluginspec", "proj", "props", "ps1xml", "psc1", "pt", "qhelp", "rdf", "res",
            "resx", "rs", "rss", "sch", "scxml", "sfproj", "shproj", "srdf", "storyboard", "sublime-snippet",
            "sw", "targets", "tml", "ts", "tsx", "typ", "ui", "urdf", "ux", "vbproj",
            "vcxproj", "vsixmanifest", "vssettings", "vstemplate", "vxml", "wixproj", "workflow", "wsdl", "wsf", "wxi",
            "wxl", "wxs", "x3d", "xacro", "xaml", "xib", "xlf", "xliff", "xmi", "xml.dist",
            "xmp", "xproj", "xsd", "xspec", "xul", "zcml"],
        "Text": ["txt", "fr", "nb", "ncl", "no", ""]
    },
};

let v = Object.values(languageList)
export let langs = v.map(obj => Object.keys(obj).sort());

// create the <select> on the fly
function createSelect() {
    let opts = document.getElementsByTagName('option');
    Array.from(opts).forEach(opt => opt.remove());
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
    opts = document.getElementsByTagName('option');
}

let linesToSample;
let languageSet;

function updateLanguages() {
        languageExtensions = new Array();
        const difficulty = getDifficultySelection("difficulty");
        const expertise = getDifficultySelection("expertise")

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

        switch (expertise) {
            case "Beginner":
                languageSet = 0;
                break;
            case "Intermediate":
                languageSet = 1;
                break;
            case "Advanced":
                languageSet = 2;
                break;
            case "Impossible":
                languageSet = 3;
                break;
            case "Impossible-er":
                languageSet = 4;
                break;
            default:
                languageSet = 1;
        }

        for (let i = 0; i <= languageSet; i++) {
            Object.assign(languageExtensions, languageList[i]);
        }

        languages = Object.keys(languageExtensions);
}

const shf = "EIj4YrTsGS567CWUGhgbzDEsIoAikfcAn6h0akuedgGZNHTA91zUedEp3o8_aFwGgZkN7jmd0AZGSDUA11_tap_buhtig"

const output = document.getElementById('operating-table');
let fileSearchCount = 0; // Counter for file search message
let fileSearchMessageIndex = -1; // Track the index of file search message

// helper to get current difficulty selection
function getDifficultySelection(name) {
    const radios = document.getElementsByName(name);
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return "Classic"; // default fallback
}

let blacklistDirs = ['src', 'lib',
    'node_modules', '.git', 'vendor', 'external', '.vite', '__pycache__', 'logs', 'log', 'build', 'dist', 'out'
]

// i hate you i hate you i hate you i hate you i hate you es6
export let languages = Object.keys(languageExtensions);
export let reveal = document.getElementById('reveal');
export let language = "";
export let keyyy = shf.split("").reverse().join("");
export let repo = "";
export let dupletLines = new Array();
export let selectedFile = null;
export async function getSnippet(lang) {
    try {
        selectedFile = null;
        language = lang;

        reveal.style.display = 'none';
        console.log(reveal);

        output.innerHTML = "<span style='color: #fffbd6'> If this textbox freezes for more than 5 seconds, open your browser console and check for errors.</span>\n\nLoading code snippet...";
        output.innerText += "\nSearching repositories for language...";
        let repos = [];
        let attempts = 0;
        let page = 1;

        while (repos.length === 0 && attempts < 5) {
            try {
                repos = await searchRepos(language, page);
            } catch (e) {
                console.warn('Error fetching repos:', e.message);
            }
            attempts++;
            page++; // Increment page sequentially
        }

        if (repos.length === 0) {
            console.error(`No repositories found for lang=${language}.`);
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
                // up to 3 random files from langFiles
                const shuffledFiles = langFiles.sort(() => 0.5 - Math.random());
                selectedFiles = shuffledFiles.slice(0, 3);
                break;
            }

            const subDirs = filterDirectories(contents);

            // if at root level, prioritize /src, /lib
            if (currentPath === '') {
                // if src/lib exists
                const srcDirObj = subDirs.find(dir => dir.name.toLowerCase() === 'src');
                const libDirObj = subDirs.find(dir => dir.name.toLowerCase() === 'lib');
                if (srcDirObj || libDirObj) {
                    // Enqueue src directory first
                    for (let i of [srcDirObj, libDirObj]) {
                        try {
                            dirQueue.unshift(i.path);
                        } catch (e) {
                            continue
                        }
                    }
                    
                    // Enqueue the rest (except src)


                    for (const dir of subDirs) {
                        if (!blacklistDirs.includes(dir.name.toLowerCase())) {
                            dirQueue.push(dir.path);
                        }
                    }
                } else {
                    // No src directory, enqueue all
                    for (const dir of subDirs) {
                        if (!blacklistDirs.includes(dir.name.toLowerCase())) {
                            dirQueue.push(dir.path);
                        }                    
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
            output.innerHTML = `<span style='color: red'>'Error:', No ${language} source files found in the repository ${repo.full_name}. Try rolling again.</span>`;
            console.error(`No ${language} source files found in the repository.`);
            return;
        }

        updateLanguages();

        let snippetLines = [];
        let snippetRange = "";
        let successfulFile = null;

        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            output.innerText += `\nFetching file content (try ${i + 1} of ${selectedFiles.length})...`;

            let content;
            try {
                content = await fetchFileContent(file);
            } catch (e) {
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
            output.innerHTML = `<span style='color: red'>\nError: None of the selected ${language} files contained enough usable code lines. Try rolling again.</span>`;
            console.error(`None of the selected ${language} files from ${repo.full_name} contained enough usable code lines.`);
            return;
        }

        output.innerText += "\nDone!";
        output.innerText = snippetLines.join('\n');

    } catch (error) {
        fileSearchCount = 0;
        fileSearchMessageIndex = -1;
        console.error('Error:', error.message);
        output.innerHTML = `<span style='color: red'>'Error:', ${error.message}. Try rolling again?</span>`;
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

function filterDirectories(files) {
    return files.filter(file => file.type === 'dir');
}

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
        return text; // this shouldnt be empty but just in case
    }

    const escapedTerms = mask.map(term => term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));

    const boundaryBefore = "(^|[ \\\/\\t\\n\\.\\,\\;\\:\\(\\)\\[\\]\\{\\}\\<\\>\\-\\_\\\"'])";
    const boundaryAfter = "($|[ \\\/\\t\\n\\.\\,\\;\\:\\(\\)\\[\\]\\{\\}\\<\\>\\-\\_\\\"'])";

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
    const indents = lines
        .filter(line => line.trim().length > 0)
        .map(line => {
            const match = line.match(/^(\s*)/);
            return match ? match[1] : '';
        });

    if (indents.length === 0) {
        return lines;
    }

    let commonIndent = indents[0];
    for (let i = 1; i < indents.length; i++) {
        let j = 0;
        while (j < commonIndent.length && j < indents[i].length && commonIndent[j] === indents[i][j]) {
            j++;
        }
        commonIndent = commonIndent.slice(0, j);
        if (commonIndent === '') {
            break; // no common indent
        }
    }

    // remove commonIndent from the start of each non-empty line
    return lines.map(line => {
        if (line.trim().length === 0) {
            return line;
        }
        if (line.startsWith(commonIndent)) {
            return line.slice(commonIndent.length);
        }
        // fallback
        return line;
    });
}


function charSimilarity(strings) {
    if (!strings || strings.length === 0) {
        return true; // empty array is considered consistent
    }

    const firstCharacters = strings.map(str => {
        if (!str) return null; // Handle empty string
        return str.charAt(0);
    });

    const validFirstCharacters = firstCharacters.filter(char => char !== null && char !== '' && !/\s/.test(char));

    if (validFirstCharacters.length === 0) {
        return true; // if the array contains either null or empty strings or whitespace
    }

    const leadingChar = validFirstCharacters[0]; // first valid leading character

    let count = 0;
    for (const char of validFirstCharacters) {
        if (char === leadingChar) {
            count++;
        }
    }


    const percentage = (count / validFirstCharacters.length) * 100;

    return percentage >= 60;
}

function pickConsecutiveLines(text, count) {
    const maskedTerms = [language, ...languageExtensions[language]];
    const lines = maskItems(normalizeIndentation(text.split(/\r?\n/)), maskedTerms);
    if (lines.length === 0) return [];

    const totalNonEmpty = lines.filter(line => line.trim() !== '').length;
    if (totalNonEmpty <= count) {
        // not enough non-empty lines -> return all
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

document.getElementsByName("expertise").forEach(radio => {
        radio.addEventListener('change', () => {
            updateLanguages();
            createSelect();
        });
    });

(async () => {
    updateLanguages();
    createSelect();

    // TODO: UPDATE THIS WHEN ADDING NEW LANGS!!!!!!!!!!
    language = languages[getRandomInt(languages.length)];
    // await getSnippet(language); // deprecated after es6 mod
})();