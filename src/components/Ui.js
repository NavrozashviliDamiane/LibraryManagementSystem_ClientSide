import React from 'react'

function Ui() {
  return (
    <div class="wrap">
  <h1>Little UI details</h1>
  
  <p>I'm gonna show you little UI details that can really improve your user experience by providing a nice interface. This tips are not mine, they're from <a href="https://www.twitter.com/steveschoger">@steveschoger</a> on Twitter. All credits to him!</p>
  
  <div class="lud-1 lud">
    <p class="sub-title">1. Color icons slightly lighter than labels</p>
    <p>If you have icons next to labels, you can color them slightly lighter than the text that goes with them. This will make the most important info (the label) pop out.</p>
    
    <div class="ex-1 example">
      <ul>
        <li><i class="fa fa-home"></i><span>Home</span></li>
        <li class="active"><i class="fa fa-bed"></i><span>Hotels</span></li>
        <li><i class="fa fa-plane"></i><span>Flights</span></li>
        <li><i class="fa fa-bath"></i><span>Relax</span></li>
      </ul>
    </div>
  </div>
  
  <div class="lud-2 lud">
    <p class="sub-title">2. Add a subtle shadow to white text on bright background.</p>
    
    <p>If you need to use a bright background color, and white text on it, you can put the text a nice subtle shadow to make it more readable.</p>
    
    <div class="ex-2 example">
      <p>Orders</p>
      
      <div class="upper">
        <p class="revenue">$128,421.01</p>
        <p class="label">Total revenue</p>
      </div>
      <div class="lower">
        <p><b>4181</b> sales</p>
      </div>
    </div>
  </div>
  
  <div class="lud-3 lud">
    <p class="sub-title">3. Make your gradients vibrant by changing the hue instead of the lightness.</p>
    
    <p>When you use a gradient, in a button for example, be sure to change the hue to give the button a more "vivid" look.</p>
    
    <div class="ex-3 example">
      <button class="b-1">Get In Touch</button>
      <button class="b-2">Get Involved</button>
    </div>
  </div>
  
  <div class="lud-4 lud">
    <p class="sub-title">4. Shift buttons 1/2px up/down for a nice hover effect.</p>
    
    <p>In addition to this effect, you can increase the size of the shadow to give the effect of "lifting up".</p>
    
    <div class="ex-4 example">
      <button class="b-1">Create Account</button>
      <button class="b-2">Contact Sales</button>
    </div>
  </div>
  
  <div class="lud-5 lud">
    <p class="sub-title">5. Give your box shadow a slight vertical offset.</p>
    
    <p>This will give cards, boxes, or any other graphical element a more natural look than when no using any offset.</p>
    
    <div class="ex-5 example">
      <div class="card c-1">
        <p class="revenue">$128,421.01</p>
        <p class="label">Total revenue</p>
        
        <div class="line"></div>
        
        <p class="sales"><b>4181</b> sales</p>
      </div>
      
      <div class="card c-2">
        <p class="revenue">$1,009.84</p>
        <p class="label">Yesterday</p>
        
        <div class="line"></div>
        
        <p class="sales"><b>36</b> sales</p>
      </div>
      
      <div class="card c-3">
        <p class="revenue">$108.22</p>
        <p class="label">In the last hour</p>
        
        <div class="line"></div>
        
        <p class="sales"><b>3</b> sales</p>
      </div>
    </div>
  </div>
  
  <div class="lud-6 lud">
    <p class="sub-title">6. Align text properly to make your content more scannable.</p>
    
    <p>If your text is aligned properly (e.g. on the same line as the icons, or images), your text will be eaiser to read for the user.</p>
    
    <div class="example ex-6">
      <div class="col">
        <div class="icon-col">
          <i class="fa fa-database"></i>
        </div>
        <div class="text-col">
          <p class="title">Databases</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt ex ea debitis natus assumenda repellat, culpa veniam, pariatur.</p>
        </div>
      </div>
      <div class="col">
        <div class="icon-col">
          <i class="fa fa-gear"></i>
        </div>
        <div class="text-col">
          <p class="title">Configuration</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt ex ea debitis natus assumenda repellat, culpa veniam, pariatur, alias dolore illo amet.</p>
        </div>
      </div>
      <div class="col">
        <div class="icon-col">
          <i class="fa fa-shield"></i>
        </div>
        <div class="text-col">
          <p class="title">Proxies</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt ex ea debitis natus assumenda repellat, culpa veniam, pariatur, alias dolore illo amet.</p>
        </div>
      </div>
      <div class="col">
        <div class="icon-col">
          <i class="fa fa-lock"></i>
        </div>
        <div class="text-col">
          <p class="title">Security</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt ex ea debitis natus assumenda.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="lud-7 lud">
    <p class="sub-title">7. Grey color always look off on colored background.</p>
    
    <p>Either saturate your text with the same hue as the background, or use rgba with a lowered opacity to make the color of the text combine better with the background.</p>
    
    <div class="ex-7 example">
      <p class="title">Discover more</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae nihil iusto mollitia amet provident, expedita dolorum facilis porro! Hic laboriosam.</p>
      
      <input type="text" placeholder="Enter your mail"/>
      <button>Notify Me</button>
    </div>
  </div>
  
  <div class="lud-8 lud">
    <p class="sub-title">8. Use an icon instead of the standard bullet in unordered lists.</p>
    
    <p>Using icons such as arrows or checkmarks will give more life to otherwise boring unordered lists.</p>
    
    <div class="ex-8 example">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ad, excepturi quia molestias quisquam sit unde omnis a voluptate blanditiis accusantium! Voluptas itaque laborum, accusamus dicta nobis harum. Earum, a?</p>
      
      <ul>
        <div>
          <li>Lorem ipsum dolor</li>
          <li>Consectetur adipisicing</li>
          <li>Dicta nobis harum</li>
        </div>
        <div>
          <li>Voluptas itaque laborum</li>
          <li>Accusamus dicta</li>
          <li>Excepturi quia molestias</li>
        </div>
      </ul>
    </div>
  </div>
  <div class="lud-9 lud">
    <p class="sub-title">9. Use a hint of color at the top of your hero.</p>
    
    <p>This can bring liveliness to your design, complementing the accent color of your website.</p>
    
    <div class="ex-9 example">
      <div class="header">
        <div class="wrapper">
          <div>
            <p class="logo">Voluptate</p>
            <ul>
              <li>Home</li>
              <li>Tour</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <a href="#" class="log-in">Log In</a>
            <a href="#" class="sign-up">Sign Up</a>
          </div>
        </div>
      </div>
      <div class="body">
        <p class="title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa.</p>
        <p class="sub">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto suscipit officia maiores.</p>
        
        <a href="#">
          <p class="label">Sign Up Now</p>
          <p class="desc">for a 30 day trial</p>
        </a>
      </div>
    </div>
  </div>
  
  <div class="lud-10 lud">
    <p class="sub-title">10. Add a gradient border to modals or panels.</p>
    
    <p>Similar to the last tip, this will also work great in modals or panels. You can even use a two color gradient to make it look even better.</p>
    
    <div class="ex-10 example">
      <div class="modal">
        <p class="title">Congrats! The changes are successful.</p>
        <p class="sub">Thanks for submitting the changes, you'll see them live in between 5-10 minutes. To undo the changes, just hit the back button.</p>
        
        <p class="more">Need something more? <a href="#">Try the advanced settings.</a></p>
        
        <div class="actions">
          <button>Accept</button>
        </div>
      </div>
    </div>
  </div>
  <div class="lud-11 lud">
    <p class="sub-title">11. Use contrast between two adjacent boxes instead of a line.</p>
    
    <p>Using two slightly contrasted colors instead of using a line will be more pleasing to the eye and look more clean.</p>
    
    <div class="ex-11 example">
      <div class="modal">
        <div class="upper">
          <p>Are you sure you want to delete the post?</p>
        </div>
        <div class="lower">
          <p>If you delete the post you'll never be able to see it again. Alternatively, you can do a back-up of it and then delete. To do this, head back to the post and look for the "Create Backup" button. Then click delete again.</p>
          
          <div class="actions">
            <button class="delete">Delete</button>
            <button class="cancel">Cancel</button>            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="lud-12 lud">
    <p class="sub-title">12. Use color and weight to create typographic hierarchy.</p>
    <p>Not only using weight is enough, when you use color you have a well defined hierarchy between the title and the descrpition.</p>
    
    <div class="ex-12 example">
      <div class="col c-1">
        <p class="number">1</p>
        
        <p class="title">Lorem ipsum dolor.</p>
        <p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quos, veniam, accusamus quo error fuga perspiciatis.</p>
      </div>
      
      <div class="col c-2">
        <p class="number">2</p>
        
        <p class="title">Lorem ipsum dolor.</p>
        <p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quos, veniam, accusamus quo error fuga perspiciatis.</p>
      </div>
      
      <div class="col c-1">
        <p class="number">3</p>
        
        <p class="title">Lorem ipsum dolor.</p>
        <p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quos, veniam, accusamus quo error fuga perspiciatis.</p>
      </div>
    </div>
  </div>
  
  <div class="lud-13 lud">
    <p class="sub-title">13. When in doubt, 16px font size with 1.5 line height looks nice for body text.</p>
    
    <p>Also, you can use a dark shade of gray instead of black to ease the look for the user (instead of using high contrast black and white).</p>
    
    <div class="ex-13 example">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio itaque quas necessitatibus excepturi ut corporis inventore fugiat amet, exercitationem accusantium repellendus, ex incidunt quia mollitia eligendi doloribus! Sit, voluptatibus.</p>
    </div>
  </div>
  
  <div class="lud-14 lud">
    <p class="sub-title">14. Increase your letter spacing in all-caps text.</p>
    <p>This will give the text some space to breath and will make it easier to read for the user.</p>
    
    <div class="ex-14 example">
      <p class="sup-title">Lorem ipsum dolor sit amet.</p>
      <p class="title">Increase your exposure.</p>
      <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum expedita rem qui, ullam voluptatibus aut quas, quo explicabo esse quidem voluptas similique, eius velit maxime. Ipsam ab aliquam distinctio rerum!</p>
    </div>
  </div>
  <div class="lud-15 lud">
    <p class="sub-title">15. Use keylines to group similar content together.</p>
    
    <p>This will make the content appear connected, and it will be easier for the user to understand it.</p>
    
    <div class="ex-15 example">
      <div class="content">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus dignissimos magnam natus ratione.</p>
      </div>
      
      <div class="row">
        <div>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-facebook-square"></i>          
        </div>
        <div class="form">
          <p>Sign up for our newsletter</p>
          <input type="text"/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  <div class="lud-16 lud">
    <p class="sub-title">16. Create a great hero banner with blend-mode: multiply</p>
    
    <p>Using blend-mode with a desaturated photo and a background color gives a nice contrast to your hero banner with white text.</p>
    
    <div class="ex-16 example">
      <div class="bg-back"></div>
      <div class="bg"></div>
      <div class="ui">
        <div class="header">
          <p class="logo"><b>Next</b>Big<b>Thing</b></p>
          
          <ul>
            <li>Work</li>
            <li>Services</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="body">
          <p class="title">Your ideas are <i>bigger</i> than you think</p>
          <p class="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste debitis labore aspernatur ullam rerum, architecto hic quasi.</p>
          
          <a href="#" class="a-1">Learn more</a>
          <a href="#" class="a-2">See the work</a>
        </div>
      </div>
    </div>
  </div>
  <div class="lud-17 lud">
    <p class="sub-title">17. Overlap elements to create depth.</p>
    <p>This will also encourage users to scroll and reveal the rest of the content.</p>
    
    <div class="ex-17 example">
      <div class="upper">
        <p class="p-1">Coming Soon</p>
        <p class="p-2">Next Big Thing</p>
        <div class="line"></div>
        
        <p class="p-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime in recusandae corrupti molestiae ab nulla perspiciatis iusto. Atque vitae.</p>
        
        <div class="handler">
          <div class="block">
            <p>Lorem ipsum dolor, sit amet consectetur. Desereunt <b>earum dolores error iusto velit</b> possimus natus.</p>
            
            <div class="form">
              <input type="text" placeholder="Enter your mail"/><button>Notify Me!</button>
            </div>
          </div>
        </div>
      </div>
      <div class="lower">
        <div class="wrapper">
          <p class="title">Are you ready for the <i>Next Big Thing</i>?</p>
          <div class="line"></div>
          <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate impedit accusamus beatae neque maxime in molestiae a ratione sed provident doloribus suscipit, saepe modi consequatur cumque et quas autem.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="lud-18 lud">
    <p class="sub-title">18. Don't use bold color for negative action if it's not the main action.</p>
    
    <p>This may confuse the users, instead use a subtle gray or light color.</p>
    
    <div class="ex-18 example">
      <button class="b-1">Cancel</button>
      <button class="b-2">Update</button>
    </div>
  </div>
  
  <div class="lud-19 lud">
    <p class="sub-title">19. Create hierarchy for your buttons.</p>
    
    <p>Your primary action button should stand out more than secondary/danger buttons.</p>
    
    <div class="ex-19 example">
      <button class="b-1">Cancel</button>
      <button class="b-2">Previous</button>
      <button class="b-3">Next</button>
    </div>
  </div>
  
  <div class="lud-20 lud">
    <p class="sub-title">20. However, use red if you are confirming a high severity action.</p>
    <p>If you don't use a color like red for confirming a high severity action user may think there's no danger in it.</p>
    
    <div class="ex-20 example">
      <p>Are you sure you want to delete?</p>
      
      <div>
        <button class="b-1">Cancel</button>
        <button class="b-2">Delete</button>
      </div>
    </div>
  </div>
  
  <div class="lud-21 lud">
    <p class="sub-title">21. Make the border of buttons lighter than the text.</p>
    <p>This will make them stand out.</p>
    
    <div class="ex-21 example">
      <button>Submit a talk</button>
    </div>
  </div>
  
  <div class="lud-21 lud">
    <p class="sub-title">21. And finally, avoid using borders, instead use background colors.</p>
    <p>Too many borders can make a piece of UI look cluttered. This may be distracting the user from the main goal.</p>
    
    <div class="ex-22 example">
      <div class="modal">
        <div class="upper">
          <p class="title">Contacts</p>
          <div class="input-wrapper">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Search teams or members" />
          </div>
          
          <div class="users">
            <div class="row">
              <div>
                <div class="state"></div>
                <p>Tighten Co.</p>
              </div>
              <p>Team</p>
            </div>
            
            <div class="row">
              <div>
                <div class="state on"></div>
                <p>Taylor Otwell.</p>
              </div>
              <p>Member</p>
            </div>
            
            <div class="row">
              <div>
                <div class="state"></div>
                <p>Adam Whatan.</p>
              </div>
              <p>Member</p>
            </div>
            
            <div class="row">
              <div>
                <div class="state"></div>
                <p>Duke Street Studio Inc.</p>
              </div>
              <p>Team</p>
            </div>
            
            <div class="row">
              <div>
                <div class="state on"></div>
                <p>Jeffrey Way</p>
              </div>
              <p>Member</p>
            </div>
          </div>
        </div>
        <div class="lower">
          <button class="b-1">Cancel</button>
          <button class="b-2">Invite</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

