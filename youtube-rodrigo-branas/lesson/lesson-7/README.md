## Angular Files Organization

- Inline Style
    - "All in same file"
    - `app/ > .htlm, .js`
    - Simple projects
    - Prototypes
    - Proofs

- Stereotyped Style
    - "Aggregate components of same type"
    - `app/ > css/, js/, lib/, view/, index.html`
    - Few components
    - Little code
    - Unique domain

- Specific Style
    - "One file for each component"
    - `app/ > css/, js/, lib/, view/, index.html`
    - `js/ > controllers/, directives/, services/, app.js`
    - Median project
    - Many components

- Domain Style
    - "Grouped files of same domain"
    - Each folder has the `.css, .js, .html` together.