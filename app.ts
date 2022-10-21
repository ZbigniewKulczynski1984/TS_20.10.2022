initEventListener();

function initEventListener() {
    const btn: HTMLElement | null = document.getElementById('exchange');

    if (btn !== null) {
        if (btn instanceof HTMLButtonElement) {
            btn.addEventListener<'click'>('click', (event: MouseEvent) => {
                event.preventDefault();
                event.stopPropagation();
                getGold();
                getSilver();
                getCopper();

            });
        } else {
            throw new Error(`HTML element for exchange is not a button`);
        }
    } else {
        throw new Error(`Button for exchange not found`);
    }
}

function getCopper() {
    const copper: HTMLElement | null = document.getElementById('copper');

    if (copper != null && copper instanceof HTMLInputElement) {
         copper.valueAsNumber;
    } else {
        throw new Error(`HTML element is null wrong type`);
    }
}

function getSilver() {
    const silver: HTMLElement | null = document.getElementById('silver');

    if (silver != null && silver instanceof HTMLInputElement) {
        return silver.valueAsNumber;
    } else {
        throw new Error(`HTML element is null wrong type`);
    }
}

function getGold() {
    const gold: HTMLElement | null = document.getElementById('gold');

    if (gold != null && gold instanceof HTMLInputElement) {
        return gold.valueAsNumber;
    } else {
        throw new Error(`HTML element is null wrong type`);
    }
}

