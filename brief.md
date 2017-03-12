

# Brief / planning doc

## Issue
Writing harmony parts to accompany a melody which fit a chord progression is time-taking and requires a medium level of 
music theory knowledge. Many people I have talked to, and myself, have trouble writing harmony even when rhythmic and 
melodic concepts are not an issue. This is often because the person needing to write the harmonies doesn't play a 
chordal instrument and so can't easily hear the sounds in their head. When composing and arranging music, I spend lots 
of time going back and forth listening and then adjusting, which can be time-consuming and more importantly can end up 
with bad sounding results. This is particularly relevant when writing parts a short time before a rehearsal or even 
during a rehearsal and you have no way listening to the sound without disturbing others around you. Currently there is 
no perfect solution available. If you search online, the only solutions that exist are instructions for how to write 
voicings by hand, and a few built in features of proprietary music notation software such as sibelius. Neither of these 
two solutions is particularly useful. Writing voicings by hand still requires knowledge/time/experience, and most music 
notation software is expensive and complicated to use.

There is an opportunity here to create a piece of software designed to automate the process of writing orchestrations.

## Stakeholders
- The main stakeholder (direct user) of the software is the composer, arranger or band/section leader who is tasked with 
writing ensemble parts. 
- The secondary stakeholders of the software are the musicians who will have to play the music. 
- Other stakeholders are people who will listen to the music, or interact with the music in some way.

### Further explaination of how different stakeholders in different contexts may experience the issue

#### Scenarios:
1. Medium sized jazz band
    - Instruments: bass, piano, guitar, drums, trumpet, alto saxophone, tenor saxophone and trombone.
    - They rehearse once each week for 1 hour
    - Drummer is band leader, and writes/organises music to play
        - Has music theory knowledge of rhythm, but no knowledge of harmony
        - Can find lead sheets (containing melody and chords) for the pieces they play online. [Example][lead sheet]
        - This is enough for the bass, piano, guitar and drums
        - The horns (trumpet, alto saxophone, tenor saxophone and trombone) need written harmony parts in the 
        appropriate [transposition](http://music.stackexchange.com/questions/5374/what-is-a-transposing-instrument) for 
        the instrument
        - The drummer lacks the music theory knowledge to do this and the other band members are all working full time 
        and have no time to do this
2. Small school pop band
    - Instruments: Drums, Bass, Rhythm Guitar and vocals, Lead guitar and vocals, Lead vocals
    - The Drums, Bass, 2 Guitars and lead vocalist have learnt the songs by ear
    - The band wants to add some cool backup vocal harmonies
    - None of them have music theory training
    - They know the chords and can work out the notes of the melody, but rhythm notation is beyond their capabilities
    - The singers have tried to come up with harmonies on thier own, but they don't fit with the chords of the song
3. A cappella vocal quartet
    - Instruments: Soprano, Alto, Tenor and Bass voices
    - They all work full time and need a quick way to write out parts for songs they want to sing
4. String Quartet Session Recording
    - Called in to do a recording session
    - The band they are recording for only has chords and melody
    - The sound engineer needs a quick way to give the string quartet parts to play

## Questions to ask stakeholders
1. Have you experienced the issue
2. Would you use a digital tool to speed up the process
3. What are the most important/useful features to have in such a product
4. What should I consider when designing making the product
5. What would you use it for and in what environment

## Conceptual statement

Writing harmony parts for an ensemble is time-taking and requires a high level of music theory knowledge. If you 
search online, the only solutions that exist are instructions for how to write voicings by hand, and a few built in 
features of proprietary music notation software such as Sibelius. Neither of these two solutions is particularly 
useful. Writing voicings by hand still requires knowledge/time/experience, and most music notation software is 
expensive and complicated to use. 

To solve this issue an orchestration/voicing app will be developed. It will have features to make orchestration 
easier such as writing a fully voiced/harmonized set of parts for a specified group of instruments from a melody 
in a variety of forms and a chord progression.

It will be flexible and suitable for use in multiple different situations, such as band rehearsals and as part 
of the composition process. It will be accessible for different ages and levels of experience, from beginner 
music students all the way up to professional sound engineers. It will also produce high-quality results. It 
will also be easy to maintain from a develpment perspective.

## Considerations
- The software needs to be easy to use and access
    - If it is not easy to use, it won't be suitable for all the different users. It has to be accessible for non 
    tech-savvy users including seniors and children as young as 7 or 8
- It must be quick and efficient to use
    - This is for the 'power users' such as sound engineers and professional composers/orchestrators. If the 
    software isn't fast enough not to slow down the creative process, these users in particular will find it more
    time taking than the manual alternative
- It needs to be flexible
    - This is important for making the software usable in as many common situations as possible. If the software is 
    unsuitable for one situation, it may turn people off using it for other situations. There are many different 
    creative workflows and it should be usable in as many as possible
- It should be accessible for people with less experience
    - For an example see scenario 2 above. Many of the younger users will not have formal music training and therefore
    they won't be able to use the software if it requires detailed knowledge.
- It needs to produce high quality results
    - If users have to fix up the output of the software too much, it can be more time taking than writing from scratch. 
    This also affects the tertiary stakeholders in a major way, because if the music doesn't sound good, they will be 
    unhappy. If the generated parts are hard or awkward to play that negatively affects the secondary stakeholders, 
    because they won't enjoy playing the music and therefore won't practice
- It should be easily maintainable
    - If the software is not easy to maintain from a development perspective, it is less likely to be maintained,
    which will in turn affect how the software can change to reflect changes in stakeholder needs and it's ability to 
    solve more issues and fill more needs/opportunities in the future.

[lead sheet]: http://www.piano-ology.com/JazzSchool/Images/LeadSheetExamples/AutumnLeaves.gif "Lead sheet example"
