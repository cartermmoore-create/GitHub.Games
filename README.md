# GitHub.Games

GitHub.Games is a curated directory for discovering free browser games from game publishers around the web. It is intended to feel like a small browser-game portal: search the library, filter by genre or publisher, and open a game on the site that hosts it.

## Play locally

Open `index.html` in a modern browser, or run a local static server:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and `/ (root)`, then save.
4. GitHub Pages will publish the site at the repository's Pages URL.

## How the directory works

- `catalog.js` stores the curated game listings and official publisher URLs.
- `script.js` renders the catalogue and handles search, category filtering, publisher filtering, and sorting.
- `styles.css` contains the responsive layout and the CSS-only game artwork.
- `index.html` contains the page structure.

The games are hosted by their original publishers. The Play buttons open those official game pages in a new tab. GitHub.Games does not download, copy, re-host, or claim ownership of the games or their artwork. This avoids breaking publisher saves, updates, and supported game embeds.

## Add a listing

Add an entry to `GAME_CATALOG` in `catalog.js`. Use the game's official playable URL, give credit to the publisher, and only include games that are actually available to play in a browser. Do not copy game files, logos, or screenshots without permission.

## License

The original website code is provided under the MIT License. Third-party games, names, logos, and other publisher materials remain the property of their respective owners and are subject to their own terms.
