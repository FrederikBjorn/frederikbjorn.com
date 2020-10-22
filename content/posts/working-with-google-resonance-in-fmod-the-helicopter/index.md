---
description: The first blog post
summary: An explanation of how i made a helicopter using Google Resonance in FMOD
title: Working with google resonance in FMOD - The Helicopter
date: 2020-10-22
tags:
  - blog
  - Google resonance
  - FMOD
  - Helicopter

---

<h3> How to make Helicopter using Google resonance in FMOD, working with ambisonics and occlusion </h3>

<center>
{{< vimeo 469509261 >}}

<br>

</center>

<em>- Please be aware that using the different ambisonic tools by Google resonance has
to route through the Resonance Audio Listener to work in unity.</em>


<img src="Helicopter_folder_structure.png" alt="Helicopter_folder_structure.png" align="right" width="40%">
<em>How i made the helicopter sound:</em>
<br>

First i made a brainstorm of the different sounds a helicopter can make, what objects can get affected
by a helicopter and how they would sound in this specific situation, and how these two approaches correlate.
As you can see from my folder structure, I decided on haveing the following events;
<br>- An engine event with multible engine sounds.
<br>- A big propellor event with a sound of the air being pushed and some flicking noise made with a synthesizer.
<br>- A small propellor event with a faster flickering noise, also made using a synthesizer.
<br>- A siren event, for dramatic effect.
<br>- An event, placed at ground level, contaning layered mono sounds of heavy wind.
<br>- An event which triggers when you are just under the helicopter. Containing four different quadrophonic audio files of
wind, all spatialised out in different directions* and played in async of each other.
<br>- An event that triggers in the same way as the previous, but playing the sound of gravel flying all around you**.
<br>
<br>
I think it is a good approach to make this kind of brainstorm and to research how the object you are trying to reproduce actually sounds like in real life.
You can do this by waching videos or even better; take a stroll and search for the object, in my case a helicopter.
Two things to keep ind mind is;
<br>(a) <em>Where are the sounds comming from? Where on the actual soundsource, front or back? Or is it a sound occurring because of the soundsource. </em>
<br>(b) <em>How does the sound reach you? Is it occluded on the way? Is it reflected onto a surface like a big building or something? </em>
<br>
<h4><em>Occlusion</em></h4>
<img src="Resonance_Audio_Source_Helicopter_Engine.png" alt="Resonance_Audio_Source_Helicopter_Engine.png" width="100%">
<br>
In the Google Resonance Audio Source we have a knob called; occlusion. This refers to how muffled the sound is,
it can ether occur because there is something inbetween the soundsource and the listener or because the soundsource is far away from the listener.
It is achived by a complex filtering of the sound which correlates to real world physics.
In FMOD you make a parameter called Occlusion on then map the Resonance Audio Source occlusion automation to this parameter and set the values as you please.
This occlusion parameter can also be handy in controlling different reverb and delay settings.
Like on the siren sound I mapped the reverb time, reverb level, amount of early vs. late reflections and some delay to the occlusion parameter.
This was, together with the occlusion filtering, a way of futher muffeling out the sound if the helicopter was far away or behind something.
It is audable, although very subtle,  when the helicopter is behind one of the boulders (1:30).

<img src="Fmod_studio_event_emitter_oclussion.png" alt="Fmod_studio_event_emitter_oclussion.png" align="right" width="50%">

In this explenation i won't cover how to actually script the specifics in C# but I higly recommend checking out Alessandro Famà toturial on the subject***.
Nonetheless as you can see i have a text box where i can enter the name of my parameter as a string and a slider to easily control the
intenity of the oclussion from unity.
<h4><em>Triggering the ambisonics in Unity
</em></h4>
So working with ambisonic sounds requires a DAW that can handle different surround formats (like Reaper or Pro Tools HD) and a
spatialiser program like FB360***.

I FMOD i used the Google resonance tool, called Resonance Audio Soundfield.
This makes sure the audio is send as a quadrophonic audio file to the Resonance Audio Listener.



<img src="Resonance_Audio_Soundfield.png" alt="Resonance_Audio_Soundfield.png" align="right" width="35%">



<br>
<br>
<br>
<em>* Made with the tool, FB360, see post about creating music with FB 360 <a href="https://frederikbjorn.com/posts/working-with-google-resonance-in-fmod-the-music/">
<br>Click here for a simple FB360 guide. </a href>
<br>
<br>** Made with a program called, Sound Particles made by a company under the same name.
<br>*** A guide to occlusion scripting by Alessandro Famà <a herf="https://alessandrofama.com/tutorials/fmod-unity/occlusion/">
<br>Click here for the occlusion guide. </a href>
</em>
<!--
Important points:

Triggering the ambosonic audio in unity

-->

