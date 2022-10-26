import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Q-1: What react Router used for?</Accordion.Header>
                <Accordion.Body>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Q-2: What is Vercel good for react?</Accordion.Header>
                <Accordion.Body>
                    Vercel is a platform for deploying the fastest React sites. You can deploy your site with zero configuration to the best frontend infrastructure.

                    Develop: Build React sites that connect to your favorite APIs, databases, and content management systems.
                    Preview: Integrate with any GitHub, GitLab, or Bitbucket repository for instant continuous deployment.
                    Ship: Deploy your site to every edge node worldwide for the fastest React sites. Static files, Serverless and Edge Functions, and more.
                    Monitor: Measure Core Web Vitals from actual devices your visitors are using with Vercel Analytics for Next.js or Gatsby.
                    Built-in CI/CD for React sites
                    Vercel has integrations for GitHub, GitLab, and Bitbucket to enable CI/CD for your React site with zero configuration. Then, you can run automated tests for performance and reliability on every push. Pull and merge requests are deployed instantly to a unique URL, accessible to your entire team.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Q-3: What Is Express JS? </Accordion.Header>
                <Accordion.Body>
                    Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.

                    It's a layer built on the top of the Node js that helps manage servers and routes.

                    <h5>Why Express JS?</h5>
                    Express was created to make APIs and web applications with ease,
                    It saves a lot of coding time almost by half and still makes web and
                    mobile applications are efficient.
                    Another reason for using express is that it is written in javascript as javascript is an easy language even if you don't have a previous
                    knowledge of any language. Express lets so many new developers enter the field of web development.
                    The reason behind creating an express framework for node js is:

                    Time-efficient
                    Fast
                    Economical
                    Easy to learn
                    Asynchronous
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Q-4: What is Node.js?</Accordion.Header>
                <Accordion.Body>
                    Node.js is an open source server environment.
                    Node.js is free.
                    Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.).
                    Node.js uses JavaScript on the server.

                    <h5>Why Node.js?</h5>
                    A common task for a web server can be to open a file on the server and return the content to the client.

                    Here is how PHP or ASP handles a file request:

                    Sends the task to the computer's file system.
                    Waits while the file system opens and reads the file.
                    Returns the content to the client.
                    Ready to handle the next request.
                    Here is how Node.js handles a file request:

                    Sends the task to the computer's file system.
                    Ready to handle the next request.
                    When the file system has opened and read the file, the server returns the content to the client.
                    Node.js eliminates the waiting, and simply continues with the next request.

                    Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default FAQ;