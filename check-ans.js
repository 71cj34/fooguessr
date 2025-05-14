import { language, repo, dupletLines, selectedFile } from './get-github-string.js';

function youWin() {
    let style = document.createElement('style');
    style.textContent = `
    * {
  animation: pulseGreen 1.5s ease-out;
  animation-iteration-count: 1;
}

@keyframes pulseGreen {
  0% {
    color: initial; /* Or your original background color */
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); /* No glow initially */
  }
  50% {
    color: rgba(0, 255, 0, 0.5); /* Semi-transparent green */
    box-shadow: 0 0 0 10px rgba(0, 255, 0, 0); /* Expanding glow */
  }
  100% {
    color: initial; /* Back to original */
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); /* No glow */
  }
}


/* Optional adjustments */
/* Adjust the radial size and fade out */
/* .pulseGlow {
  animation: pulseGlow 1.5s ease-out infinite;
}

@keyframes pulseGlow {
  0% {
      box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.9);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(0, 255, 0, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(0, 255, 0, 0);
  }
} */
    `
    document.head.appendChild(style);
}

function youLose() {
    let style = document.createElement('style');
    style.textContent = `
    * {
  animation: pulseRed 1.5s ease-out;
  animation-iteration-count: 1;
}

@keyframes pulseRed {
  0% {
    color: initial; /* Or your original background color */
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); /* No glow initially */
  }
  50% {
    color: rgba(255, 0, 0, 0.5); /* Semi-transparent green */
    box-shadow: 0 0 0 10px rgba(0, 255, 0, 0); /* Expanding glow */
  }
  100% {
    color: initial; /* Back to original */
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); /* No glow */
  }
}
    `
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', () => {
document.getElementById('submit').addEventListener('click', async () => {
    const ans = document.getElementById('programmingLanguages');
    console.log("here")
    if (language == ans.value) {
        youWin();
    } else {
        youLose();
    }

    const response = await fetch('https://api.github.com/repos/' + repo.full_name, {
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': 'Bearer'
        }
    });
    const data = await response.json();
    console.log(dupletLines);
    const defaultBranch = data.default_branch;
    const url = 'https://github.com/' + repo.full_name + '/tree/' + defaultBranch + '/' + selectedFile.path + "#L" + dupletLines[1].split(" - ")[0] + "-L" + dupletLines[1].split(" - ")[1];
    console.log(url);


    reveal = document.getElementById('reveal');
    reveal.style.display = 'inline-block';

    // classes are for cowards
    reveal.innerHTML = `<div style='border: 1px solid ${language != ans.value ? "red" : "green"}; border-radius: 8px; padding: 10px;'>
    <${language != ans.value ? "span style='color: red; font-size: 1.2rem'>You lose...</span>" : "<span style='color: green'>You win!</span>"}<br><br>
    
    This snippet was <strong><code class="code-inline special-code" style="text-decoration: none;">${language}</strong></code> code from the repository <a href="${"https://github.com/" + repo.full_name}"
     target="_blank"><code class="code-inline special-code">${repo.full_name}</code></a> from lines ${dupletLines[1]} of file <a href="${url}" target="_blank">
     <code class="code-inline special-code">${selectedFile.path.split("/")[1] ? selectedFile.path.split("/")[1] : selectedFile.path}</code></a>.</div>
    `
});
});