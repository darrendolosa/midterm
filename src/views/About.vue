<template>
	
	<v-card>
	  <v-tabs
		v-model="tab"
		background-color="transparent" color="green" slider-color="purple"
	  >

		<v-tab value="one">Item One</v-tab>
		<v-tab value="two">Item Two</v-tab>
		<v-tab value="three">Item Three</v-tab>
		<v-tab value="four">Item four</v-tab>
	  </v-tabs>
  
	  <v-card-text>
		<v-window v-model="tab">
		  <v-window-item value="one">
			<h2>About Me</h2>
			<p>My name is Darren. I have lived in both Bicol and manila.
			Some of my favorite things to do are read, 
			listen to music, and ride public transportation (buses and trains).
			These are activities that I enjoy immensely and indulge in daily.
			My career aspirations are to become either an It engineer or web developer. I have been told that I am a charming, kind, attitude-prone 
			person with "oddities". I look up mostly to my family members, especially
			my mom, as a guiding figure in life. Favorite shows of mine include 
			Doctor Who, Sherlock, Triple D (Diners, Drive-Ins' and Dives), Hustle,
			and Chopped (yes, the majority of those are British TV shows, problem, mate?).
			Just a few things about yours truly</p><br><br>
			<h2>Favorite TV Shows</h2>
			<ul>
				<li>Doctor Who</li>
				<li>Sherlock</li>
				<li>Triple D (Diners, Drive-Ins' and Dives)</li>
				<li>Hustle</li>
				<li>Chopped</li>
			</ul>
	  <br><br>
			<h2>Favorite Places by City</h2><br><br>
			<center><table border="1"> 
				<tr>
					<th>Bicol</th>
					<th>Manila</th>
				</tr>
				<tr>
					<td>Mayon volcano</td>
					<td>Intramuros</td>
					
				</tr>
				<tr>
					<td>Gubat surf camp</td>
					<td>Moa</td>
				</tr>
				<tr>
					<td>Paguriran</td>
					<td>Rizal Park</td>
		</tr>
			</table></center>
		<p></p>

		  </v-window-item>
  
		  <v-window-item value="two">
			<h1 >Programming Skill</h1>
                
			<v-container class="my-5">
			  <h2>Database and SQL</h2><br><br>
		<p>One of the basic expectations of any programmer is that they are familiar with core database concepts. This is because data is the fuel companies run on, and it proliferates almost every aspect of every project. 
		
		While there are many languages used to work with databases, the most common is Structured Query Language (SQL — pronounced “sequel”). Though SQL was developed in the 1980s, it is still the standard language used to communicate with relational databases and is considered critical for modern programmers. In recent years, SQL has been heavily used by PC databases because it facilitates access to distributed databases (e.g., those spread out over multiple computer systems); allowing several local users to access the same network simultaneously. SQL also enables easy storage and organization of data in relational databases (e.g., databases where tables are related to one another through common data). 
		
		If you’re interested in gaining SQL experience, it may be helpful to practice with MySQL. Referred to as a relational database management system (RDMS), this open-source software is based on SQL and many aspiring coders use it to work on developing their own systems, applications, and websites for free.
		
		NoSQL, on the other hand, is a database management system (DBMS) that stores and accesses data using key-values, rather than relationally, which offers some additional flexibility. One example of a NoSQL database is MongoDB, an open-source program which can be used for high-volume document data storage, and deals with document structure variations nicely.
		
		Of course, there are many more systems and software packages to learn when mastering databases, but having a strong foundation in database concepts and SQL is an important first step for all programmers.
		</p><br><br>
		<h2>Web development</h2><br><br>
		<p>
		  Many professionals consider web development a subset, or specialization of programming. Therefore, it only makes sense for those who plan on working in web development to learn the associated languages and tech, right? Well, maybe not.
		  
		  Certainly, it goes without saying that programmers who plan to work in web development need to have a strong background in the core tools. Some of these tools include:
		  
		  ------HTML/CSS: HyperText Markup Language (HTML) and Cascading Style Sheets (CSS) are both basic coding languages — often, they are the first two that web developers learn. HTML helps organize the content and structure of a web page, while CSS determines its style and presentation.
		  ------JavaScript: JavaScript is most commonly used for front end development, though it is sometimes used for back end development as well. As one writer for Mozilla explains, “Every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.”</p>
		</v-container>

		  </v-window-item>
  
		  <v-window-item value="three">
			<h1>About your program</h1>
                
			<v-container class="my-5">
			  <h2>What is Information technology/</h2><br><br>
		<p>Information technology (IT) is the use of computer systems or devices to access information. Information technology is responsible for such a large portion of our workforce, business operations and personal access to information that it comprises much of our daily activities. Whether you are storing, retrieving, accessing or manipulating information, IT greatly impacts our everyday lives.
	  
		  Information technology is used by everyone from enterprise companies all the way down to one-person businesses and local operations. Global companies use it to manage data and innovate their processes. Even flea market sellers use smartphone credit card readers to collect payments and street performers give out a Venmo name to gather donations. If you use a spreadsheet to catalogue which Christmas presents you bought, you’re using information technology.</p><br><br>
		<h2>Importance of Information technology</h2><br><br>
		<p>Information technology drives much of what we do in our personal and professional lives. It is the foundation of our communication, technological advancement, innovation, sustainability and recreation. We use information technology on a personal level to connect and communicate with others, play games, share media, shop and be social.
	  
		  From a career perspective, information technology is largely responsible for much of our business operations and spans nearly every industry. From healthcare to food services, manufacturing to sales, and beyond, we rely on IT to help connect us to others, store and manage information and create more efficient processes.
		  </p>
		  <br><br><h2>Types of information technology</h2><br><br>
		  Information technology is a broad term that involves the use of technology to communicate, transfer data and process information.
	  <br>
		  The different trends within information technology include, but aren’t limited to:
		  <br><br>
		  Analytics <br>
		  Automation<br>
		  Artificial intelligence <br>
		  Cloud computing <br>
		  Communications <br>
		  Cybersecurity <br>
		  Data/database management <br>
		  Infrastructure <br>
		  Internet of things <br>
		  Machine learning <br>
		  Maintenance and repair <br>
		  Networks <br>
		  Robotics <br>
		  Software/application development <br>
		  SCADA <br>
		  This list is by no means exhaustive and new applications for technology are constantly emerging. <br>
	  
	  </v-container>

		  </v-window-item>

		  <v-window-item value="four">
			<h1><a href="https://tip.edu.ph/home/another-set-of-t-i-p-programs-passed-aun-qa-assessment/">Visit TIP Page</a></h1>
              
			<v-carousel>
			  <v-carousel-item
			  v-for="(item,i) in items"
			  :key="i"
			  :src="item.src"
			  reverse-transition="fade-transition"
			  transition="fade-transition"
			  ></v-carousel-item>
			</v-carousel>
			
		
			
		
			<v-container class="my-5">
			  <h2>About TIP</h2><br><br>
		<p>The Technological Institute of the Philippines (T.I.P.) is one of the country’s premier technological, engineering, and computing higher educational institutions.  It is a private non-sectarian stock school founded on February 8, 1962 by a group of educators headed by Engineer Demetrio A. Quirino, Jr. and Dr. Teresita U. Quirino. Using an outcomes-based educational model with its locally and globally accredited programs, T.I.P. allows students to acquire industry-desired qualities and essential experiences that better equip them to be effective as soon as they enter the workforce or set up their own business.
	  
		  Engr. Demetrio A. Quirino Jr.
		  
		  T.I.P. Founder
		  
		  Dr. Teresita U. Quirino
		  
		  T.I.P. Founder
		  
		  T.I.P. laid down its objective based on its founders’ vision: 1) to maintain high standards of instruction; 2) to bring within the reach of the masses the blessings of higher education; and 3) to cooperate with the government in the implementation of its economic and social amelioration programs.
		  
		   
		  
		  The school committed itself to educating and developing men and women who could turn the wheels of progress and industry. T.I.P.’s initial offering of courses included Chemical Engineering, Civil Engineering, Electrical Engineering, Mechanical Engineering, and Architecture. It also offered Industrial Education, Industrial Arts, Liberal Arts, High School, and various trade courses.
		  
		  T.I.P.’s first site was the Lorenzana Building in Quiapo, Manila. The school had an initial enrollment of 2,400 which steadily increased throughout the years, prompting the school to slowly but surely expand. In 1967, it set up its main site at G. Puyat Street, Quiapo, Manila.
		</p><br><br>
		 
		</v-container>

		  </v-window-item>
		</v-window>





	  </v-card-text>
	</v-card>
  </template>
  <script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>