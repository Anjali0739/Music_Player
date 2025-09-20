# 🎵 Django Music Player

A lightweight Django web app that streams songs with album art, lyrics, and playback controls in a sleek two-column dark UI.

## Features
- **Dynamic Music Library** – Songs, artists, and cover images are served from the database.
- **Lyrics Panel** – Displays synced or static lyrics beside the player.
- **Pagination Controls** – Step through tracks with previous/next buttons.
- **Responsive Design** – Looks great on desktop and mobile.

## Tech Stack
- **Backend:** Python 3, Django
- **Frontend:** HTML5, CSS3, MediaElement.js (HTML5 audio player)
- **Database:** SQLite (default, easily switchable to PostgreSQL/MySQL)

## Quick Start
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
python3 -m venv venv
source venv/bin/activate  # on Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
