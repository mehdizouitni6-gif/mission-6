input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("F D C5 E G A D C5 ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("- B - - G B C A ", 120), music.PlaybackMode.UntilDone)
})
