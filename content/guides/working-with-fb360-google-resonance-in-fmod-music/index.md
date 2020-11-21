---
description:
summary: An explanation of important parameters and general use of the FB360 & Google resonance in FMOD. Main focus; the music
title: 
date: 2020-10-21
tags:
  - Google resonance
  - FMOD
  - FB 360
---

<a style="text-decoration:none;font-family:courier new;font-size:14px;text-decoration:none;">

<h3>How to make a ambisonic music using FMOD, Google resonance and FB360</h3>

This is a part of a three piece series on Google Resonance and the use of ambisonic audio in games.
Please check out the other two parts here:

<a href="https://frederikbjorn.com/guides/working-with-google-resonance-in-fmod-the-helicopter/">
<em><h6><strong>How to make a Helicopter using Google resonance in FMOD, working with ambisonics and occlusion</strong></h6></em>
</a>

<a href="https://frederikbjorn.com/guides/working-with-google-resonance-in-fmod-the-fireplace/">
<em><h6><strong>How to make a Fireplace using Google resonance and ambisonics</strong></h6></em>
</a>


</a>

<center>
{{< vimeo 469509261 >}}

<br>

</center>

<a style="text-decoration:none;font-family:courier new;font-size:14px;text-decoration:none;">

<em>Please be aware that using the different ambisonic tools by Google resonance has
to route through the Resonance Audio Listener to work in unity. </em>
<br>
Most of the music in this video is made using a tool called FB360, made by facebook for their 360° video platform.
<br>

</a>

<img src="FB360_Spatialiser.png" alt="FB360_Spatialiser" align="center" width="100%">
<br>

<a style="text-decoration:none;font-family:courier new;font-size:14px;text-decoration:none;">

It is a very powerful tool for creating music in a lot of different surround formats, for games and films.
Not all DAWS can work with surround, as far as i know, only Reaper and Pro Tools HD has the functionality as of writing this (sorry Ableton users).
FB360 is free and user friendly, so feel free to check it out.



<br>Link:

</a>

<em>https://facebook360.fb.com/spatial-workstation/</em>
<br>
<br>

<a style="text-decoration:none;font-family:courier new;font-size:14px;text-decoration:none;">

<h4> <em> FB360:</em> </h4>

So the FB360 Spatial Workstation plug-in has some different functions, but I will focus on the Positioning and Attenuation.

<h4> <em> Positioning:</em> </h4>

<em>Azimuth;</em> refers to where around you the sound is playing and is measured in 360°.
<br><em>Elevation;</em> refers to the sound being below or above you and is measured in 180°
<br><em>Distance;</em> is basically a fader with some complex HRTF (head related transfer function) filtering added to give sensation that the sound source is either close or distant. It is measured in meters.
<br><em>Spread;</em> refers to the size of the audio. E.g. if you have the sound of a train, it is going to sound wired if it has a small spread
because a train in the real world has sounds coming from a lot of different places.
With spread it is important to think about how the sound would naturally be heard.
<br>

<h4> <em> Attenuation:</em> </h4>

Min & max distances are self explanatory but the factor slider is the attenuation curve where a value of 1 is a 6dB drop everytime
the distance is doubled. This is how most sounds work in the real world.
<br>
In the example in the video, I had some strings with a bit of reverb which i processed as seen in the picture above.
The important thing in this example was the spread parameter. When working with music in ambisonics you have to <em>"correct"</em> way
of setting your spread-parameter since there is no real world reference. I choose to have a high level of spread because humans are accustomed to hear
music extra-diegeticly from movies and games.
To get a feel for how the i would be to move around this sound in the game, you can drag the (1) symbol around the 360° grid.


After finding the settings i liked the best, i made a few variant chords (to add randomization in the game)
and bounced a quadraphonic audio file out of Reaper.

Then i set up a Multi Instrument with my different variant string chords and put a Google Resonance Audio Soundfield on my master.
In unity I had a box collider to trigger my music. It is very important to keep in mind that audio playing through the Google Resonance Audio Soundfield
component will play everywhere. Therefore triggers and faders and what not is very important.
<br>
<br>
<em>- This project was a part of an exam in 3D audio at Sonic College<em/>
<br>
<br>
<em>frederikbjorn.com - 2020</em>
<br>

</a>
