# Joakim Wimmerstedt - Portfolio

Personal website. Will serve as a blog/portfolio.

## Dependencies
Few dependencies.

* node + npm

Run npm install to install dev deps and the just gulp and it's all up and running.

## FFMPEG
To convert gif's into mp4's i use this ffmpeg command:

    ffmpeg -i <input-gif> -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" <output-mp4>

For the fallback gifs to display correctly they need to be named the same thing and be in the same folder, except for the file-extension.
