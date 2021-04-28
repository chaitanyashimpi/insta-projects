# Projects based on Post pushed on Instagram



What will be covered in this Repo:
==========================
```
1. speedtest Introduction
2. How to Test internet speed
```

Speedtest Introduction:
==========================
The internet connections in our homes and offices can differ by internet service providers (ISPs), allowable traffic limit, and most importantly speed. So what do you usually do when you want to test the speed our connection? You google it, right? How about testing the internet speed using Python from your machine!

Speedtest cli library provides Command line interface for testing internet bandwidth using speedtest.net

If you wish to know more about it, you can refer to [Speedtest Documentation](https://pypi.org/project/speedtest-cli/). Use this link to navigate to the documentation.

Instructions:
==========================
In order to access the Python library, you need to install it into your Python environment, use the following command to install Speedtest

<h4><code> pip install speedtest-cli </code></h4>

Now, let's import the package in our Python script.

<h4><code> import speedtest </code></h4>

Let's create an instance of Speedtest and call it st

<h4><code> st = speedtest.Speedtest() </code></h4>

Let's move forward and check for download speed. We will make use of download method to fetch the speed and store in d_st

<h4><code> d_st = st.download() </code></h4>

Similarly, to check for the upload speed, we will make use of upload method to fetch the speed and store in u_st

<h4><code> u_st = st.upload() </code></h4>

Once done, let's display the download and upload speed. (This will show the speed in bytes, so we will multiply it by 8000)

<h4><code> print("Your Download speed is", d_st/8000) </code>
<br/><br>
<code> print("Your Upload speed is", u_st/8000) </code>
 </4>
 
Let's check for ping. We can do so by making use of the following command.

<h4><code> st.get_servers([]) </code></h4>

Let's fetch the ping and store it in ping, we will make use of results.ping for the same.

<h4> <code>ping = st.results.ping</code>
<br><br>
<code>print("Your Ping is", ping)</code>
</h4>

LICENSE:
==========================
Copyright (c) 2021 Chaitanya Shimpi

This project is licensed under the MIT License


 <p align="center">
  <b><i>Let's connect! Find me on the web.</i></b>

<div align="center">
  
[<img alt="Instagram" src="https://img.shields.io/badge/Instagram%20-%23E4405F.svg?&style=for-the-badge&logo=Instagram&logoColor=white"/>](https://instagram.com/chaitanyashimpi)
[<img src="https://img.shields.io/badge/Github-%23000000.svg?&style=for-the-badge&logo=github&logoColor=white">](https://github.com/chaitanyashimpi)
[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white">](http://www.linkedin.com/in/chaitanyashimpi/)
[<img alt="Discord" src="https://img.shields.io/badge/Discord%20-%237289DA.svg?&style=for-the-badge&logo=discord&logoColor=white"/>](https://discord.gg/V3FmgSRDcY)
[<img alt="Medium" src="https://img.shields.io/badge/Medium%20-%23000000.svg?&style=for-the-badge&logo=Medium&logoColor=white"/>](https://chaitanyashimpi.medium.com/)
<br />
</div>
  
If you have any Queries or Suggestions, feel free to reach out to me.

<h3 align="center">Show some &nbsp;❤️&nbsp; by starring some of the repositories!</h3>
