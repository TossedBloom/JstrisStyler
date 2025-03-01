const cssList = [
    {
        label: 'CenterBoard',
        styles: `
        #gameFrame.center-board {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        #gameFrame.center-board  #main {
            float: none;
        }
        
        #gameFrame.center-board  #players {
            float: none;
            /* display: flex; */
        }
        
        #gameFrame.center-board  #gameSlots {
            display: none;
        }`
    },
    {
        label: 'HidePreviews',
        styles: `
        #previewCover {
            position: absolute;
            top: 216px;
            width: 100px;
            backgroundColor: black;
        }`
    }
]

const handlers = {
    centerBoard: () => {
        document.querySelector('#gameFrame')?.classList.add('center-board')
    },

    uncenterBoard: () => {
        document.querySelector('#gameFrame')?.classList.remove('center-board')
    },

    hidePreviews: (numberOfPreviews: number = 0) => {
        const previewCover: HTMLElement | null = document.querySelector('#previewCover')
        if (previewCover) {
            previewCover.style.height = 48 * numberOfPreviews + 'px'
        }
    },

    hidePreview0: () => { handlers.hidePreviews(0) },
    hidePreview1: () => { handlers.hidePreviews(1) },
    hidePreview2: () => { handlers.hidePreviews(2) },
    hidePreview3: () => { handlers.hidePreviews(3) },
    hidePreview4: () => { handlers.hidePreviews(4) },
    hidePreview5: () => { handlers.hidePreviews(5) }
}

const init = () => {
    // Prepare styles
    const styleEl = document.createElement('style')
    cssList.forEach(style => {
        if (style.styles) {
            styleEl.textContent += style.styles
        }
    })
    document.head.appendChild(styleEl)

    // Add input element to accept user inputs
    const app = document.querySelector('#app') as HTMLDivElement
    const inputEl = document.createElement('input')
    app.append(inputEl)
    inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement
            if (target.value in handlers) {
                handlers[target.value as keyof typeof handlers](); // Ensuring the key is valid
                target.value = ''
            }
        }
    });
}

