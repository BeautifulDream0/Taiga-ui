describe(`TablePagination`, () => {
    beforeEach(() => {
        cy.viewport(`macbook-13`);
    });

    describe(`Dropdown with \`[size]\`-options (amount items per page)`, () => {
        it(`Basic case`, () => {
            cy.tuiVisit(`/components/table-pagination/API`);
            initializeAliases(`#demo-content`);

            cy.get(`@linesPerPageSelect`).click();
            waitForCheckmarkIcon();
            cy.get(`@tablePagination`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`0-[size]-dropdown-base`, {
                    padding: [0, 0, 150, 0],
                });
        });

        it(`With very long option name`, () => {
            const longNumber = Number.MAX_SAFE_INTEGER;

            cy.tuiVisit(
                `/components/table-pagination/API?items=[0, ${longNumber}]&size=${longNumber}&total=${longNumber}&page=0`,
            );
            initializeAliases(`#demo-content`);

            cy.get(`@linesPerPageSelect`).click();
            waitForCheckmarkIcon();
            cy.get(`@tablePagination`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`1-[size]-dropdown-long-option-name`, {
                    padding: [0, 0, 100, 0],
                });
        });
    });

    it(`Custom size-option content`, () => {
        cy.tuiVisit(`/components/table-pagination`);

        initializeAliases(`#custom-size-option-content`);

        cy.get(`@linesPerPageSelect`).click();

        waitForCheckmarkIcon();

        cy.get(`tui-dropdown`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`2-[sizeOptionContent]-dropdown`);
    });

    function initializeAliases(selectorToTablePagination: string): void {
        cy.get(`${selectorToTablePagination} tui-table-pagination`)
            .should(`be.visible`)
            .as(`tablePagination`);

        cy.get(`@tablePagination`)
            .find(
                `[automation-id=tui-table-pagination__lines-per-page-wrapper] tui-hosted-dropdown`,
            )
            .should(`be.visible`)
            .as(`linesPerPageSelect`);
    }

    function waitForCheckmarkIcon(): void {
        cy.get(`tui-dropdown`)
            .find(`tui-svg.t-checkmark use`)
            .should(`be.visible`)
            .invoke(`height`)
            .should(`be.greaterThan`, 0);
    }
});
