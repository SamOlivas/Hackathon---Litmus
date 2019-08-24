const express = require('express');
const app = require('./server');
const axios = require('axios')

const subSeed = '/r/therewasanattempt/'

//Grab all thread URLS
const urlsFromSubreddit = async(subredditURL) => {
  const threadArray = [];
  const response = await axios.get(subredditURL+'.json');
  const allThreads = response.data.data.children
  allThreads.forEach( (thread) => {
    //console.log(thread)
    threadArray.push(thread.data.permalink)
  });
  return(threadArray);
}

// Grabs all tier 1 comment from post, returns as array
const commentsFromThread = async(threadURL) => {
  const response = await axios.get('www.reddit.com'+threadURL+'.json');
  const threadComments = response.data[1].data.children
  const commentArray = threadComments.map( (comment) => {
    comment.data.body
  })
  //console.log(commentArray);
  return commentArray
};

const commentsFromSubredit = async(subredditURL) => {
  const allComments = [];
  const urls = await urlsFromSubreddit(subredditURL);
  console.log(urls)

};

commentsFromSubredit('https://www.reddit.com/r/therewasanattempt/')

module.exports = commentsFromThread;
