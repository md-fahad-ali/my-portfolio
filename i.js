const progressBar = require("progress-bar-cli");

let resumeFrom = 50;
let loop_len = 1000;
let startTime = new Date();
for (i = 0; i < loop_len; ++i) {
    // call progressBar at the start of the loop block
    progressBar.progressBar(i, loop_len, startTime);
    
    // code to skip to the ith iteration and continue from there
    if (i < resumeFrom) {
        console.log("> skipping", i);
        continue;
    }
    
    /** START OF LONG RUNNING JOB/PROCESS IN LOOP*/
    //
    // Insert your CODE Here!!
    //
    /** END OF LONG RUNNING JOB/PROCESS IN LOOP*/
}
