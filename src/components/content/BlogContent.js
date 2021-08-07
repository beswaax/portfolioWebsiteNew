import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  name: {
    lineHeight: 1,
  },
  content: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
  paragraph: {
    marginBottom: theme.spacing(3),
  },
  bolderText: {
    marginBottom: theme.spacing(3),
    fontWeight: 500,
  },
  image: {
    maxWidth: "100%",
    borderRadius: theme.shape.borderRadius,
  },
}));

export default function Blog(props) {
  const classes = useStyles();

  const content = {
    date: "Jan 16, 2020",
    "header-p1": "Donec lacinia",
    "header-p2": "turpis non sapien lobortis pretium",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    name: "Samuel Clintoc",
    job: "Web Developer",
    paragraph1:
      "It all boils down to how much work is involved. In particular, the two factors that determine how much work is required are the size and complexity of your website. This means that a good looking, professional 10 page informational website with standard customization costs less than a highly customized 50 page website with all the bells and whistles.",
    paragraph2:
      "In terms of real costs, the cost of creating a website for a small business could be less than $ 1,000 or more than $ 15,000.",
    paragraph3:
      "That's a wide range of prices. So let's break things down so you can get a realistic estimate of the cost of designing and developing your website.",
    paragraph4:
      "NOTE: The following information applies to small and medium-sized businesses. It is not intended for large, deep pocket companies where full-time workers who design, develop, and manage their websites in-house receive EUR 80,000 to EUR 120,000 per year.",
    paragraph5:
      "Here are the 2 options (with pricing) for designing and developing a small business website:",
    paragraph6:
      "Option 1: work with an agency or a freelancer to create a website.",
    paragraph7:
      "If you are very busy running your business and / or are just not a tech geek, you need to hire someone to create your website for you. As simple as that.",
    paragraph8:
      "However, if you've searched online and visited some website design / development websites, you have likely come across:",
    arrayOfStuff1: [
      "No prices given at all.",
      "Prices across the board, from ridiculously cheap to insanely expensive.",
    ],
    paragraph9:
      "The good news is that I've rolled up my sleeves and done some research for you on what it will cost to build (or redesign) a small business website in 2021.",
    paragraph10: "How much does a professional website cost?",
    paragraph11:
      "For web designers who have given their prices, I've found that the price to build a modern, professional small business website in 2021 is typically between $ 3,000 and $ 9,000, depending on the number of pages on the site , but that price can easily go over $ 20k (or more) if the project is more complex.",
    paragraph12:
      "Website design vs. website development. Website design and website development are often used interchangeably, but they are two very different things. Website design is like working with one an architect to design your home. Developing a website is like working with a contractor to actually build your home. The 2021 price estimates listed above apply to both website design * and website development(i.e. the full total cost).",
    paragraph13:
      "Now that you have an idea of ​​what things cost, let's take a closer look at the specific factors that affect the price of a small business website:",
    arrayOfStuff2: [
      {
        title: "Page volume:",
        desc: "Let's say a web development company has a 10-page website package for $3,500, but your website requires 25 pages - how much does that cost? As a rule of thumb, around $100-$200 per page must be added for each page, which is more than what is included in the standard website package. In this example, adding 15 pages (to the 10 included in the standard website package) would cost $ 1,500. Add this amount to the original base price of $3,500 and the revised total is $5,000. Of course, every situation will be different, but at least you will get a reasonable cost estimate based on industry prices in 2021.",
      },
      {
        title: "Custom site layout:",
        desc: "Almost every website starts with a theme or a template. Building a website from scratch is far too time-consuming and expensive and is usually reserved for big businesses(e.g. BMW or Honda). Often times, having a template or theme will get you 40-50% of the finish line. However, there is still a lot of tweaking and coding to make your website look and work the way you want it to. The more customization and coding required, the higher the cost. Templates and themes are a major reason you can often create a professional small business website in the $ 3,000 to $ 6,000 range instead of $ 15,000 to $ 20,000 or more.",
      },
      {
        title: "Custom images and graphics:",
        desc: "Fancy images and graphics can give your website a unique look, but they come at a price. Sophisticated visual effects often require special editing software and the talent of a specialist in custom graphic design.",
      },
      {
        title: "Custom Logo:",
        desc: "Though not required, a custom logo is a nice addition to any website. If you want a decent-looking, professionally designed logo in 2021, expect a price between $500 and $1,000.",
      },
      {
        title: "Custom Coding:",
        desc: "Sometimes you can find a WordPress plugin that has the features you want right away (e.g. image carousel, member portal, payment calculator, etc.). Other times, it takes significant effort to get your website to do what you want it to. In a perfect world, everything would be plug-and-play and would work perfectly the first time - but that's rarely the case. It usually takes some tinkering and testing to get everything to work as intended, which ultimately ramps up the cost of the website.",
      },
      {
        title: "Number of revisions:",
        desc: "Most website projects start with an initial concept design (similar to a rough draft). Then it's common to do 1 or 2 rounds of design revisions to get everything right. Some website designers offer up to 3-5 rounds of design revisions. Technically, a website designer can offer as many rounds of design revisions as they want. Note, however, that each iteration of the design increases the overall cost of the project. In my experience, 1-2 rounds of design revisions are more than sufficient 99% of the time.",
      },
      {
        title: "Website content development (i.e. copywriting):",
        desc: "Solid, thoughtful, and compelling content is the foundation of any great website. If you start a new website but don't have any content yet, it needs to be developed. If you have an existing website but the content is weak, or out of date, it needs refinement, improvement, or possibly even a makeover. Over the years I have found that the biggest obstacle to starting a website is content development. ,       ",
      },
    ],
    proTips: [
      {
        title: "TIP 1:",
        desc: "If you want to hire a freelance web designer to help you with your website, but don't feel like you can afford a flat upfront payment, see if they offer financing. This way you get a really nice website 'now' that you can use to grow your business without breaking your bank account.",
      },
      {
        title: "TIP 2:",
        desc: "Be careful with budgeting. Unusually low prices often result in poor workmanship, an uncomfortable experience, or you end up paying extra for every little thing.",
      },
    ],
    paragraph14: "OPTION 2: Build the website yourself",
    paragraph15:
      "If you have a basic understanding of web technology and are good at doing the job yourself, you can completely build your own website.",
    paragraph16: "The raw materials you need are not particularly expensive:",
    arrayOfStuff3: [
      {
        title: "Domain name:",
        desc: "10-$12 a year to register a new domain. There are tons of providers to choose from. I prefer Namecheap.com",
      },
      {
        title: "Website Hosting",
        desc: "The cost ranges from around $ 100 per year for standard web hosting from companies like BlueHost or HostGator to $ 300 to $ 500 per year for more robust web hosting from companies like WPengine or SiteGround - which is only needed if your website gets more than 100k visitors/month. At this point, you can upgrade to a more powerful web server.",
      },
      {
        title: "SSL Certificate:",
        desc: "Even if you don't plan on selling things directly from your website, you still want to secure your website using the HTTPS protocol. You can get an SSL certificate for as little as $10 a year or 200-$300 a year. Browse around, but don't buy more than you actually need. UPDATE: Some web hosting companies are now offering a free SSL Certificate as an incentive to host your website with them.",
      },
      {
        title: "Premium Theme:",
        desc: "40-$100. There are hundreds if not thousands of themes to choose from. Some free, some paid. I urge you to spend a few dollars and get a quality theme. Don't save here. You will thank me later.",
      },
      {
        title: "Premium Plugins:",
        desc: "50-$100. As with website themes, you usually get what you pay for. Do yourself a favor and invest a few dollars to get quality plugins. For example, two premium plugins you can use on almost every site are WPForms and Envira Gallery. Yes, there are plenty of free plugins out there, and many of them are very good. But there are also a lot of bad plugins that don't work as advertised and waste a lot of time. So be careful!",
      },

      {
        title: "Stock Photos:",
        desc: "If you're a good photographer or already have high quality images for your website, you're ready. However, there is a chance that you will need to purchase some images to spruce up your website a little. Places I recommend are: Unsplash.com, Pexels.com, Shutterstock.com.",
      },
    ],
    paragraph17:
      "How much does a website cost a year? Realistically speaking, you will spend between $300 and $600.",
    paragraph18: "Obviously, the main cost of the DIY option is your time.",
    paragraph19:
      "Even for a 'very simple' website, don't be surprised if it takes 60 to 100 hours to produce something of decent quality that you can be proud of. Assuming you're already familiar with building a website. If If this is completely new to you, multiply this time estimate by 2x or 3x. I'm not exaggerating. ",
    paragraph20:
      "Building a modern, mature website is a lot more time-consuming than most people think. However, if you have more time than money right now and are not overwhelmed by web technology, the DIY approach is a perfectly viable option.",
    paragraph21:
      "The cost of website updates, upgrades, maintenance, and licenses. Once your website is up, your job isn't done. Just like buying a home, you need to invest time, effort, and money to maintain it. For example, annual hosting and maintenance fees, and possibly annual license fees for premium plugins and services. It is likely that you will purchase new images as you update and expand your website. ",
    paragraph22:
      "You can add employees or hire freelancers to create new custom web content or videos and to step up your marketing efforts. Your site also requires ongoing technical maintenance to install updates and security patches for core WordPress files and WordPress plugins protect against hacking(If you build your website using Wordpress). Yes, small business websites are also attacked by hackers.",
    paragraph23:
      "If you like doing these updates yourself, that's great. But sometimes, routine updates break your site so you need to know what to do when this happens. Are you ready to deal with error messages?",
    paragraph24:
      "You also need an external backup system so that in the event of a catastrophic hardware or software failure (or user error) that crashes your website, your website can be quickly restored. Sorry to alert you, but these things really happen!",
    paragraph25:
      "If you'd prefer not to worry about the messy technical maintenance of your website behind the scenes, you can purchase a website maintenance plan for 40-$300 per month, depending on the services you need.",
    paragraph26:
      "As your business grows and evolves, your website may need more complex features. If you can implement these technical upgrades yourself, that's great. Otherwise, the cost of hiring a knowledgeable, experienced web developer in 2021 is between $75 and $300 an hour(or more if you want rockstar web developers).",
    proConsAgency: {
      title: "An agency or a freelancer for the creation of your website.",
      header1: "Pros",
      header2: "Cons",
      pros: [
        "You don't have to spend days, weeks, or months learning the technology needed to build and run a website.",
        "You get a modern, professional website that you are proud of, one that accurately reflects your business and brand.",
        "Visitors will have a good experience on all devices - desktop, tablet & mobile.",
        "They can help you manage your website.",
        "Professional web designers / web agencies can recommend ideas and help you avoid pitfalls that you probably would not have thought of.",
      ],
      cons: [
        "Requires an investment of several thousand dollars (most likely in the $ 3,000-25,000 range) to build a new website from scratch or to redesign an existing one.",
        "If you don't understand web technology you are to some extent dependent on your website designer / developer managing your website once it is launched,",
      ],
    },
    prosConsAlone: {
      title: "Create website yourself",
      header1: "Pros",
      header2: "Cons",
      pros: [
        "If you currently have more time than money, building your website yourself is cheaper than hiring a professional website designer / developer,",
        "You can use a website builder like Wix or Squarespace to get a simple, decent looking website up and running in a day or two. Wix plans currently range from $ 8 to $ 24 per month. SquareSpace plans range from $ 9 to $ 36 EUR per month. ",
        "No delay. Any changes or updates to your website after launch can be made immediately.",
      ],
      cons: [
        "If you are not up to date with the latest website design trends, your website may look amateurish and negatively affect how your business is perceived.",
        "Building a website can feel like a monumental task. Hence, it is common to hesitate weeks or months. If the reluctance to build your website is great enough, your website may not get built at all.",
        "It's incredibly time-consuming. You may need 5 to 10 hours or more to research how something works on your website when a skilled website designer / developer can complete the same particular task in 5 to 10 minutes.",
      ],
    },
    paragraph27: "CONCLUSION:",
    paragraph28:
      "Hire someone. Whether a freelancer with experience or an agency, it depends on how much you want to invest in the project.",
    paragraph29:
      "Yes, I'm biased, but I'm also being honest. Building a modern, professional website that generates leads and sales for your business is far more difficult and time-consuming than most people think.",
    paragraph30:
      "If funds are currently tight and the DIY approach to creating your business website is your only option, just do your best. However, if you can afford it, hiring a skilled web designer / developer can help you build (or redesign) your website a lot faster and the finished product will be better than anything you could have done yourself. ",
    paragraph31:
      "For the same reason, I like to pay accountants, auto mechanics and roofers for their expertise. They can usually get the job done faster, better and cheaper than I could do it myself.",
    ...props.content,
  };

  return (
    <section>
      <Container maxWidth="md">
        <Box py={10}>
          {/* <Box textAlign="center" mb={5}>
            <Container maxWidth="sm">
              <Chip color="primary" label={content["date"]} />
              <Box my={4}>
                <Typography variant="h3" component="h2">
                  <Typography variant="h3" component="span" color="primary">
                    {content["header-p1"]}{" "}
                  </Typography>
                  <Typography variant="h3" component="span">
                    {content["header-p2"]}
                  </Typography>
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar alt="" src={content["avatar"]} />
                <Box ml={2} textAlign="left">
                  <Typography
                    variant="subtitle1"
                    component="h2"
                    className={classes.name}
                  >
                    {content["name"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    color="textSecondary"
                  >
                    {content["job"]}
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box> */}
          <Box className={classes.content}>
            <Typography
              variant="subtitle1"
              color="texPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content["paragraph1"]}
            </Typography>
            <Typography
              variant="subtitle1"
              color="texPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content["paragraph2"]}
            </Typography>
            <Typography
              variant="subtitle1"
              color="texPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content["paragraph3"]}
            </Typography>
            <Box my={4}>
              {/* <img src={content["image"]} alt="" className={classes.image} /> */}
            </Box>
            <Typography
              variant="subtitle1"
              color="texPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content["paragraph4"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="texPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content["paragraph5"]}
            </Typography>

            <Typography
              variant="h4"
              color="textPrimary"
              paragraph={true}
              className={classes.bolderText}
            >
              {content["paragraph6"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content["paragraph7"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph8"]}
            </Typography>

            <ul>
              {content.arrayOfStuff1.map((typo, i) => (
                <li key={i}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                    className={classes.paragraph}
                  >
                    {typo}
                  </Typography>
                </li>
              ))}
            </ul>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content["paragraph9"]}
            </Typography>

            <Typography
              variant="h5"
              color="textPrimary"
              paragraph={true}
              className={classes.bolderText}
            >
              {content["paragraph10"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content["paragraph11"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content["paragraph12"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph13"]}
            </Typography>

            <ul>
              {content.arrayOfStuff2.map((typo, i) => (
                <li key={i}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                    className={classes.paragraph}
                  >
                    <Typography variant="h6">
                      <span className={classes.bolderText}>{typo.title}</span>{" "}
                    </Typography>
                    <Typography variant="subtitle1" color="textPrimary">
                      {" "}
                      {typo.desc}
                    </Typography>
                  </Typography>
                </li>
              ))}
            </ul>

            {content.proTips.map((typo, i) => (
              <Typography
                key={i}
                variant="subtitle1"
                color="textPrimary"
                paragraph={true}
                className={classes.paragraph}
              >
                <Typography variant="h6">
                  <span className={classes.bolderText}>{typo.title}</span>{" "}
                </Typography>
                <Typography variant="subtitle1" color="textPrimary">
                  {" "}
                  {typo.desc}
                </Typography>
              </Typography>
            ))}

            <Typography
              variant="h5"
              color="textPrimary"
              //   paragraph={true}
              className={classes.bolderText}
            >
              {content.proConsAgency.header1}
            </Typography>
            <ul>
              {content.proConsAgency.pros.map((typo, i) => (
                <li key={i}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                    className={classes.paragraph2}
                  >
                    {typo}
                  </Typography>
                </li>
              ))}
            </ul>

            <Typography
              variant="h5"
              color="textPrimary"
              //   paragraph={true}
              className={classes.bolderText}
            >
              {content.proConsAgency.header2}
            </Typography>
            <ul>
              {content.proConsAgency.cons.map((typo, i) => (
                <li key={i}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                    className={classes.paragraph2}
                  >
                    {typo}
                  </Typography>
                </li>
              ))}
            </ul>
            <Box mb={10}></Box>

            <Typography
              variant="h4"
              color="textPrimary"
              paragraph={true}
              className={classes.bolderText}
            >
              {content["paragraph14"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content["paragraph15"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph16"]}
            </Typography>

            <ul>
              {content.arrayOfStuff3.map((typo, i) => (
                <li key={i}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                    className={classes.paragraph}
                  >
                    <Typography variant="h6">
                      <span className={classes.bolderText}>{typo.title}</span>{" "}
                    </Typography>
                    <Typography variant="subtitle1" color="textPrimary">
                      {" "}
                      {typo.desc}
                    </Typography>
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph17"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph18"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph19"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph20"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph21"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph21"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph22"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph23"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph24"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph25"]}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph2}
            >
              {content["paragraph26"]}
            </Typography>

            <Typography
              variant="h5"
              color="textPrimary"
              //   paragraph={true}
              className={classes.bolderText}
            >
              {content.prosConsAlone.header1}
            </Typography>
            <ul>
              {content.prosConsAlone.pros.map((typo, i) => (
                <li key={i}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                    className={classes.paragraph2}
                  >
                    {typo}
                  </Typography>
                </li>
              ))}
            </ul>

            <Typography
              variant="h5"
              color="textPrimary"
              //   paragraph={true}
              className={classes.bolderText}
            >
              {content.prosConsAlone.header2}
            </Typography>
            <ul>
              {content.prosConsAlone.cons.map((typo, i) => (
                <li key={i}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                    className={classes.paragraph2}
                  >
                    {typo}
                  </Typography>
                </li>
              ))}
            </ul>

            <Box mb={10}></Box>

            <Typography
              variant="h4"
              color="textPrimary"
              paragraph={true}
              className={classes.bolderText}
              style={{ marginTop: "1rem" }}
            >
              {content.paragraph27}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content.paragraph28}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content.paragraph29}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content.paragraph30}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content.paragraph31}
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
