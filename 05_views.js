
// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text: `Welcome!
    <br />
    <br />
    This experiment is a basic mental rotation task using materials from Ganis & Kievit (2015).
    <br />
    <br />
    `,
   buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const instructions_practice = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructions_practice',
    title: 'General Instructions',
    text:  `You will be shown pictures of geometric figures. Compare these images and determine if they are the same geometric figure, in which case you press the "F" key, or different, in which case you press the "J" key.
    <br />
    <br />
    You will now have a practice run first.`,
    buttonText: 'Practice'
});

const instructions_main = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructions_main',
    title: 'Instructions',
    text: `   <br />
              <br />
              Now that you have practiced, you will go for the real test run.`,
    buttonText: 'Go to trials'
  });


// In the post test questionnaire you can ask your participants addtional questions
const postTest = magpieViews.view_generator("post_test", {
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/magpie-project/magpie-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/magpie-project/magpie-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/magpie-project/magpie-project/blob/master/docs/views.md#properties-of-trial
*/

// Here, we initialize a keyPress task
const practice = custom_views.keypress_rotation_practice({
    trials: 12,
    name: 'practice',
    trial_type: 'practice',
    pause: 250,
    data: _.shuffle(practice_trials.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});


const main = custom_views.keypress_rotation_main({
    trials: 48,
    name: 'main',
    trial_type: 'main',
    pause: 250,
    data: _.shuffle(main_trials.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});

// There are many more templates available:
// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale
