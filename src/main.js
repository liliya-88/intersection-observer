import "./styles/all.scss";
import video from "../img/mov_bbb.mp4";
import imgPoster from "../img/bg-cover.jpg";
import review1 from "../img/review1.png";
import review2 from "../img/review2png.png";
import review3 from "../img/review3.png";
import iconFacebook from "../img/facebook.png";
import iconInstagram from "../img/instagram.png";
import iconTwitter from "../img/twitter.png";
import iconYoutube from "../img/youtube.png";
import img1 from "../img/team-member1.png";
import img2 from "../img/team-member2.png";
import img3 from "../img/team-member3.png";
import teamFacebook from "../img/team-fb.png";
import teamInstagram from "../img/team-ins.png";
import teamTwitter from "../img/team-tw.png";

function init() {
  const div = document.getElementById("video");
  div.setAttribute("controls", "true");
  div.setAttribute("poster", imgPoster);
  const source = document.createElement("source");
  source.setAttribute("controls", "true");
  source.setAttribute("src", video);
  source.setAttribute("type", "video/mp4");
  div.appendChild(source);

  /* review images */
  /* one item */
  const spanReview = document.getElementById("review-id1");
  const reviewImg = document.createElement("img");
  reviewImg.setAttribute("src", review1);
  reviewImg.setAttribute("alt", "review profile");
  reviewImg.className = "img_review";
  spanReview.appendChild(reviewImg);
  /* second item */
  const spanReview2 = document.getElementById("review-id2");
  const reviewImg2 = document.createElement("img");
  reviewImg2.setAttribute("src", review2);
  reviewImg2.setAttribute("alt", "review profile");
  reviewImg2.className = "img_review";
  spanReview2.appendChild(reviewImg2);
  /* third item */
  const spanReview3 = document.getElementById("review-id3");
  const reviewImg3 = document.createElement("img");
  reviewImg3.setAttribute("src", review3);
  reviewImg3.setAttribute("alt", "review profile");
  reviewImg3.className = "img_review";
  spanReview3.appendChild(reviewImg3);

  /* social icons */
  /* one item */
  const spanIconFb = document.getElementById("icon-fb");
  const iconFb = document.createElement("img");
  iconFb.setAttribute("src", iconFacebook);
  iconFb.setAttribute("alt", "facebook icon");
  spanIconFb.appendChild(iconFb);
  /* two item */
  const spanIconIns = document.getElementById("icon-ins");
  const iconIns = document.createElement("img");
  iconIns.setAttribute("src", iconInstagram);
  iconIns.setAttribute("alt", "instagram icon");
  spanIconIns.appendChild(iconIns);
  /* three item */
  const spanIconTw = document.getElementById("icon-tw");
  const iconTw = document.createElement("img");
  iconTw.setAttribute("src", iconTwitter);
  iconTw.setAttribute("alt", "instagram icon");
  spanIconTw.appendChild(iconTw);

  /* fouritem */
  const spanIconYt = document.getElementById("icon-yt");
  const iconYt = document.createElement("img");
  iconYt.setAttribute("src", iconYoutube);
  iconYt.setAttribute("alt", "instagram icon");
  spanIconYt.appendChild(iconYt);
  /* our team 1*/
  const spanTeam1 = document.getElementById("attorney1");
  const attorneyImg = document.createElement("img");
  attorneyImg.setAttribute("src", img1);
  attorneyImg.setAttribute("alt", "team member");
  attorneyImg.className = "img_team";
  spanTeam1.appendChild(attorneyImg);
  /* our team 2*/
  const spanTeam2 = document.getElementById("attorney2");
  const attorneyImg2 = document.createElement("img");
  attorneyImg2.setAttribute("src", img2);
  attorneyImg2.setAttribute("alt", "team member");
  attorneyImg2.className = "img_team";
  spanTeam2.appendChild(attorneyImg2);
  /* our team 3*/
  const spanTeam3 = document.getElementById("attorney3");
  const attorneyImg3 = document.createElement("img");
  attorneyImg3.setAttribute("src", img3);
  attorneyImg3.setAttribute("alt", "team member");
  attorneyImg3.className = "img_team";
  spanTeam3.appendChild(attorneyImg3);

  /* team icons */
  const teamIcons = document.getElementById("team_icons");
  const teamIcons2 = document.getElementById("team_icons2");
  const teamIcons3 = document.getElementById("team_icons3");
  const teamFs = document.createElement("img");
  teamFs.setAttribute("src", teamFacebook);
  teamFs.setAttribute("alt", "team facebook");
  const teamIns = document.createElement("img");
  teamIns.setAttribute("src", teamInstagram);
  teamIns.setAttribute("alt", "team instagram");
  const teamTw = document.createElement("img");
  teamTw.setAttribute("src", teamTwitter);
  teamTw.setAttribute("alt", "team twitter");

  const teamFs2 = document.createElement("img");
  teamFs2.setAttribute("src", teamFacebook);
  teamFs2.setAttribute("alt", "team facebook");
  const teamIns2 = document.createElement("img");
  teamIns2.setAttribute("src", teamInstagram);
  teamIns2.setAttribute("alt", "team instagram");
  const teamTw2 = document.createElement("img");
  teamTw2.setAttribute("src", teamTwitter);
  teamTw2.setAttribute("alt", "team twitter");

  const teamFs3 = document.createElement("img");
  teamFs3.setAttribute("src", teamFacebook);
  teamFs3.setAttribute("alt", "team facebook");
  const teamIns3 = document.createElement("img");
  teamIns3.setAttribute("src", teamInstagram);
  teamIns3.setAttribute("alt", "team instagram");
  const teamTw3 = document.createElement("img");
  teamTw3.setAttribute("src", teamTwitter);
  teamTw3.setAttribute("alt", "team twitter");

  teamIcons.appendChild(teamFs);
  teamIcons.appendChild(teamIns);
  teamIcons.appendChild(teamTw);
  teamIcons2.appendChild(teamFs2);
  teamIcons2.appendChild(teamIns2);
  teamIcons2.appendChild(teamTw2);
  teamIcons3.appendChild(teamFs3);
  teamIcons3.appendChild(teamIns3);
  teamIcons3.appendChild(teamTw3);
}

init();

/* ||| HANDLE NAVBAR */
const navBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelector(".ul_nav");
const navLink = document.querySelectorAll(".ul_nav li a");

function handleNavBtn() {
  navBtn.addEventListener("click", () => {
    navLinks.classList.add("activated");
    const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
    // console.log(isExpanded, "isExpanded");
    navBtn.setAttribute("aria-expanded", !isExpanded);
    !isExpanded && nav.classList.add("active");
    closeLink();
  });
}

handleNavBtn();

function closeLink() {
  navLink.forEach((a) => {
    a.addEventListener("click", () => {
      const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
      if (!isExpanded) {
        return;
      } else {
        navBtn.setAttribute("aria-expanded", !isExpanded);
        !isExpanded && nav.classList.add("active");
      }
    });
  });
}

closeLink();
/* ||| END OF HANDLE NAVBAR */

/* ||| INTERSECTION OBSERVERS */
/* ||| END OF INTERSECTION OBSERVERS */

/* --------------------START POINT FOR THIS PROJECT-----------------*/
