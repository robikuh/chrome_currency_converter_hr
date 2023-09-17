# Euro to Kuna Converter Chrome Extension

## Description

The Euro to Kuna Converter is a Google Chrome extension that allows users to instantly convert selected text containing Euro amounts to Croatian Kuna using a fixed exchange rate of 1 € = 7.53450 kn.

## Features

- Works on any website
- Utilizes a fixed exchange rate for quick conversions
- Context menu for easy access
- Accurate and fast calculations
- No additional permissions required

## Installation

1. Download or clone this repository to your local machine.
2. Open Google Chrome and navigate to \`chrome://extensions/\`.
3. Enable "Developer mode" if it's not already enabled.
4. Click "Load unpacked" and select the directory where you downloaded or cloned this repository.

## How to Use

1. Highlight an amount in Euros on any web page (e.g., "19.91 €").
2. Right-click to reveal the context menu.
3. Select "Convert € to kn" to see the converted amount instantly.

## Development

This extension is developed using vanilla JavaScript and Chrome's Extension APIs.

### Files

- \`manifest.json\`: The manifest file contains metadata about the extension.
- \`background.js\`: Handles the conversion logic and context menu.
