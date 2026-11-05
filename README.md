# GitHub.Games

A free browser-game collection built as a lightweight static website. No build tools, frameworks, accounts, or game downloads required.

## Play locally

Open `index.html` in a modern browser, or start a local static server:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and `/ (root)`, then save.
4. GitHub Pages will publish the site at the repository's Pages URL.

## Included games

- Pixel Breaker
- Neon Snake
- Orbit Drift
- Tiny Towers
- Minesweeper Mini
- Color Pop

Games are small HTML canvas implementations in `games.js`. The catalogue, search, filters, and modal player are in `index.html`, `styles.css`, and `script.js`.

## Add a game

Add a card in `index.html` with a `data-play` ID, then register a game in `games.js` under the `games` object. Keep the game's `start(stage)` function self-contained and return a cleanup function to stop animation and listeners when the player closes the game.

## License

The site code is provided under the MIT License. Individual games added by contributors may have their own license and attribution requirements.
