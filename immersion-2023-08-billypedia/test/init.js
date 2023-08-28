// These DOM elements must be loaded before `src/index.js` is run
$(document.head).append(`
  <title>Billypedia</title>
`);
$(document.body).append(`
  <div id="all-contents">
    <nav>
      <ul>
        <li><a href="index.html">Billypedia</a></li>
      </ul>
    </nav>

    <main>
      <div id="sidebar" class="sidebar">
        <div id="image-container-billy" class="image-container">
          <img id="image-billy" src="images/billy/billy-0.jpg" i="0" width="25%" class="image" />
        </div>
        <section id="section-top-rated" class="recordings">
          <header id="header-top-rated" class="header-recordings">Top Rated</header>
          <ul id="list-top-rated" class="list-recordings">

          </ul>
        </section>
      </div>

      <div class="content">
        <h2 class="heading heading-article">Billy Higgins</h2>
        <div id="sections">
          <section id="section-bio">
            <h3>Bio</h3>
            <p class="bio">
              Higgins was born in Los Angeles, California. Higgins played on Ornette Coleman's first records, beginning
              in 1958. He then freelanced extensively with hard bop and other post-bop players, including Donald Byrd,
              Dexter Gordon, Grant Green, Joe Henderson, Paul Horn, Milt Jackson, Jackie McLean, Pat Metheny, Hank
              Mobley, Thelonious Monk, Lee Morgan, David Murray, Art Pepper, Sonny Rollins, Mal Waldron, and Cedar
              Walton. He was one of the house drummers for Blue Note Records and played on dozens of Blue Note albums of
              the 1960s.
            </p>
            <p class="bio">
              On a whole, he played on over 700 recordings, including recordings of rock and funk. He appeared as a jazz
              drummer in the 2001 movie Southlander.
            </p>
            <p class="bio">
              In 1989, Higgins cofounded a cultural center, The World Stage, in Los Angeles to encourage and promote
              younger jazz musicians. The center provides workshops in performance and writing, as well as concerts and
              recordings. Higgins also taught in the jazz studies program at the University of California, Los Angeles.
            </p>
            <p class="bio">
              He was divorced from wife Mauricina Altier Higgins and had three sons, William, Joseph, and David, as well
              as a stepson Jody. His youngest son Benjamin resides in Los Angeles. He also had two daughters, Rickie
              Wade and Heidi. He died of kidney and liver failure on May 3, 2001 at a hospital in Inglewood, California.
            </p>
          </section>
          <section id="section-praise">
            <h3 class="heading heading-praise">Praise for Billy Higgins</h3>
            <p class="praise">
              Charles Lloyd is speaking of the late master drummer: Billy Higgins.
            </p>
            <p class="praise">
              "Let me tell you something: He had the dance-the dance of life. He was a beautiful soul who graced this
              planet and made it a better place. You know the same sun shines everywhere, but its manifestation in some
              places is stronger. Billy's spirit was so like that, so all-embracing. I feel him more than ever, but at
              the same time, I feel protective or something."
            </p>
            <p class="praise">
              "I remember we were getting ready to do a take of 'Dorotea's Studio' [from Voice in the Night], and Billy
              was looking up at the ceiling. I said, 'What's happening, Master Higgins?' He said, 'I'm trying to think
              what to play here.' I'd never seen him do that. He said, 'OK,' and played this incredible march. Here's
              this little Spanish song, and he played dut-dut-dut. It was just swinging, just dancing. That's what he
              does-he just comes up with what's needed."
            </p>
          </section>
          <section id="section-quotes">
            <h3 class="heading heading-quotes">Quotes by Billy Higgins</h3>
            <div id="quotes">
              <p class="quote">
                "The people in Japan know more about the history of jazz and the musicians than the people in the United
                States do!"
              </p>
              <p class="quote">
                "It doesn't have anything to do with yesterday or tomorrow, it's all right now."
              </p>
              <p class="quote">
                "When I was a little kid they'd say 'Little boy, what are you gonna be when you grow up?' I said, 'I'm
                gonna play the drums.' They said, 'No, no, no, no. What do you really want to be?'"
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
`);
