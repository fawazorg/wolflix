const dark = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800");
      * {
        box-sizing: border-box;
        margin: 0;
      }
      html,
      body {
        margin: 0;
        background: black;
        font-family: "Montserrat", helvetica, arial, sans-serif;
        font-size: 14px;
        font-weight: 400;
      }
      .movie_card {
        position: relative;
        display: block;
        width: 800px;
        height: 350px;
        margin: 100px auto;
        overflow: hidden;
        border-radius: 10px;
        transition: all 0.4s;
      }
      .movie_card:hover {
        transform: scale(1.02);
        transition: all 0.4s;
      }
      .movie_card .info_section {
        position: relative;
        width: 100%;
        height: 100%;
        background-blend-mode: multiply;
        z-index: 2;
        border-radius: 10px;
      }
      .movie_card .info_section .movie_header {
        position: relative;
        padding: 25px;
        height: 40%;
      }
      .movie_card .info_section .movie_header h1 {
        color: #fff;
        font-weight: 400;
      }
      .movie_card .info_section .movie_header h4 {
        color: #9ac7fa;
        font-weight: 400;
      }
      .movie_card .info_section .movie_header .minutes {
        display: inline-block;
        margin-top: 10px;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.13);
      }
      .movie_card .info_section .movie_header .type {
        display: inline-block;
        color: #cee4fd;
        margin-left: 10px;
      }
      .movie_card .info_section .movie_header .locandina {
        position: relative;
        float: left;
        margin-right: 20px;
        height: 120px;
        box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
      }
      .movie_card .info_section .movie_desc {
        padding: 25px;
        height: 50%;
      }
      .movie_card .info_section .movie_desc .text {
        color: #cfd6e1;
      }
      .movie_card .info_section .movie_social {
        height: 10%;
        padding-left: 15px;
        padding-bottom: 20px;
      }
      .movie_card .info_section .movie_social ul {
        list-style: none;
        padding: 0;
      }
      .movie_card .info_section .movie_social ul li {
        display: inline-block;
        color: rgba(255, 255, 255, 0.4);
        transition: color 0.3s;
        transition-delay: 0.15s;
        margin: 0 10px;
      }
      .movie_card .info_section .movie_social ul li:hover {
        transition: color 0.3s;
        color: rgba(255, 255, 255, 0.8);
      }
      .movie_card .info_section .movie_social ul li i {
        font-size: 19px;
        cursor: pointer;
      }
      .movie_card .blur_back {
        position: absolute;
        top: 0;
        z-index: 1;
        height: 100%;
        right: 0;
        background-size: cover;
        border-radius: 11px;
      }
      @media screen and (min-width: 768px) {
        .movie_header {
          width: 60%;
        }
        .movie_desc {
          width: 50%;
        }
        .info_section {
          background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
        }
        .blur_back {
          width: 80%;
          background-position: -100% 10% !important;
        }
      }
      @media screen and (max-width: 768px) {
        .movie_card {
          width: 95%;
          margin: 70px auto;
          min-height: 350px;
          height: auto;
        }
        .blur_back {
          width: 100%;
          background-position: 50% 50% !important;
        }
        .movie_header {
          width: 100%;
          margin-top: 85px;
        }
        .movie_desc {
          width: 100%;
        }
        .info_section {
          background: linear-gradient(to top, #141413 50%, transparent 100%);
          display: inline-grid;
        }
      }
.back_{itemid} {
 background: url("https://image.tmdb.org/t/p/w500{itemBackdrop}");
}

</style>
</head>
<body>
<div class="movie_card" id="{itemTitle}">
    <div class="info_section">
      <div class="movie_header">
        <img class="locandina" src="https://image.tmdb.org/t/p/w500{itemPoster}"/>
        <h1>{itemTitle}</h1>
        <h4>{itmeDate},{itemid}</h4>
        <span class="minutes">{movieStar} / 10</span>
        <p class="type">{itemGenres}</p>
      </div>
      <div class="movie_desc">
        <p class="text">
        {itemOverview}
        </p>
      </div>
    </div>
    <div class="blur_back back_{itemid}"></div>
  </div>      
</body>
</html>`;

module.exports = dark;
