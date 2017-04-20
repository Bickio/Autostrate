# Brief

## Conceptual Statement
Link to Blog: https://autostrate.blogspot.co.nz/
Writing harmony parts for an ensemble is time-taking and requires a high level
of music theory knowledge. If you search online, the only solutions that exist
are instructions for how to write voicings by hand, and a few built in features
of proprietary music notation software such as Sibelius. Neither of these two
solutions is particularly useful. Writing voicings by hand still requires
knowledge/time/experience, and most music notation software is expensive and
complicated to use.
To solve this issue an orchestration/voicing app will be developed to make
harmonisation and arrangement easier.It will be flexible and suitable for use in
multiple different situations, such as band rehearsals and as part of the
composition process. It will be accessible for different ages and levels of
experience, from beginner music students all the way up to professional sound
engineers, though it will initially target people with less
experience/knowledge. It will also produce high-quality results. It will also be
easy to maintain from a development perspective. It will be either cheap or free
to suit users who can't afford expensive software.

## Specifications
### Input:
- The app should accept input in the form of note names (e.g. "A#3") and chord
symbols (e.g. "Fdim7+11").
- It should display the input as sheet music, either updating in real time or on
request.
### Output:
- The app should output the harmonised voicings both as note names and as sheet
music, and should have the option to download the parts as separate PDFs and a
PDF with all the parts (score).
### The in between stuff:
- The quality of the voicings should be as high as possible. For this, the user
should be able to choose between a range of different algorithms.
- There should be a way for users to script their own algorithms if they so
choose.
- The groundwork for the music theory can and should be provided by a library
such as tonal or teoria, to save developer time.
- As the task is not computationally expensive, the calculation should be done
locally, but should be abstracted sufficiently for the computation to be moved
to the cloud if necessary at a later date.
### Backend:
- The app should use a free real-time cloud hosted database/file storage
service.
- The database chosen should be quick to set up and develop (to save developer
  time), and should be able to scale if the site requires it.
- It should also be chosen to reflect the needs of the app, such as whether
real-time updates from the database are required.
### Frontend:
- The app should use a full Javascript framework for the front end.
- The framework should be easy to set up and develop (to save developer time) and should be easily scalable and maintainable.
- It should have the ability to smooth over any of the UX bumps and potholes present in html/css, and provide a nice looking smooth running and fast UI for the user.
### CSS Framework:
- The app should use a low-level css framework (grid system). This will make it easy to get layouts up and running while the developer still has full control over the look and feel of the website.
- The framework chosen should be as lightweight as possible to reduce load times and therefore increase user experience (page load times are one of the defining factors of website experience).
### User Interface:
- The UI should conform with UI design patterns to ease the user's learning curve and make the site intuitive. This is especially important as the stakeholders are not necessarily tech savvy.
- The app should conform with the standards: https://www.w3.org/TR/html5/ and https://www.w3.org/TR/mobile-bp/
## Broadest sense (shameless use of keyword jargon)
Having both the note names and the sheet music is important for experienced musicians who can see at a glance whether something is wrong from the sheet music, improving the app’s usability and therefore its social acceptability.
The ability to output in both forms is crucial for the app to be usable by people with different levels of music theory and sight-reading skills. An experienced musician would have a very hard time trying to read note names, and beginner musicians would have a hard time reading sheet music, especially if they have had no formal training. Having multiple formats helps the app to appeal to different user groups, and therefore improves the app’s social acceptability.
The quality of the output is crucial to the lifetime of the app. If the app is initially successful, others will follow, and therefore the app will die if it cannot compete with the other apps quality-wise.
Using existing libraries is important, as it reduces the amount of developer time spent on re-inventing the wheel. If the development team is overworked, it can be detrimental to their health and safety. Choice of framework also affects the technical acceptability, as some frameworks are more likely to introduce bugs and exploits in the code which
Having a clean, modern and usable UI is important because if the app doesn’t have this, the user base will be restricted to only those who can brave an ugly interface or those who have no choice. This clearly diminishes the outcome’s social acceptability.
## Appendix: Clarification of an algorithm
An algorithm is a set of steps and logic which provide an output from an input. In this case the input is a melody and chords and the output is a set of parts for a group of instruments.
### Here is an example of an algorithm:
#### Name: 4-part Drop-2
#### Steps:
- Take the melody as the 'first' part
- For each note in the melody:
-   The highest 3 notes in the chord below the melody
-   Drop the top one (apart from the melody) down one octave
-   Distribute these three notes between the instruments in order of pitch

###And how you'd use it:
#### Input:
Chords  |Am|       |Bm7|Cdim|
Melody |C5 |E5   | F#5 |        |

#### Take the melody as the 'first' part
1st part |C5    |E5    | F#5   | F#5    |
#### For each note:
First note: C5
    First 3 notes: A4, E4, C4
    Drop the top: A3, E4, C4
    Pitch order: E4, C4, A3
    Parts: 2: E4, 3: C4, 4: A2
Second note: E5
    Parts: Parts: 2: A4, 3: E4, 4: C3
Third note: F#5
    Parts: Parts: 2: B4, 3: A4, 4: D3
Fourth note: still F#5
    Parts: Parts: 2: C5, 3: A4, 4: D#3

#### Output:
Chords  |Am |       |Bm7|Cdim|
1st part  |C5  |E5  | F#5 | F#5  |
2nd part|E4  |A4  | B4   | C5    |
3rd part |C4  |E4  | A4   |  A4  |
4th part |A2  |C3  | D3   | D#3 |
