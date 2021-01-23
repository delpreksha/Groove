 music = document.getElementById("my_audio");
            img = document.getElementById("img");
            play = document.getElementById("play");
            prev = document.getElementById("prev");
            next = document.getElementById("next");
            artist = document.getElementById("artist");
            title = document.getElementById("title");

            const songs = [
                {
                    name: "memories",
                    title: "Memories",
                    artist: "Maroon5",
                },
                {
                    name: "wakeupSid",
                    title: "Wake up Sid!",
                    artist: "Shankar Mahadevan",
                },
                {
                    name: "LejaTu_Faltu",
                    title: "Leja Tu Mujhe",
                    artist: "Atif Aslam",
                },
                {
                    name: "ilahi",
                    title: "Ilahi",
                    artist: "Arijit Singh",
                },

                {
                    name: "haiJunoon_NY",
                    title: "Hai Junoon",
                    artist: "KK",
                },
            ]

            isplaying = false;

            //play
            playMusic = () => {
                music.play();
                isplaying = true;
                play.classList.replace("fa-play", "fa-pause");
            };

            //pause
            pauseMusic = () => {
                isplaying = false;
                music.pause();
                play.classList.replace("fa-pause", "fa-play");
            };

            play.addEventListener('click', () => {
                if (isplaying == true)
                    pauseMusic();
                else
                    playMusic();
            })

            //song change
            loadSong = (songs) => {
                title.textContent = songs.title;
                artist.textContent = songs.artist;
                music.src = "tracks/" + songs.name + ".mp3";
                img.src = "images/" + songs.name + ".jpg";
            }

            songIndex = 0;
            const nextSong = () => {
                songIndex = (songIndex + 1) % songs.length;
                loadSong(songs[songIndex]);
                playMusic();
            }

            const prevSong = () => {
                songIndex = (songIndex - 1 + songs.length) % songs.length;
                loadSong(songs[songIndex]);
                playMusic();
            }

            next.addEventListener('click', nextSong);
            prev.addEventListener('click', prevSong);