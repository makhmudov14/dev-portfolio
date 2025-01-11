import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  netlify_url,
  
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
              
            </div>

            <div
              onClick={() => window.open(netlify_url, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAACUCAMAAAADFo1ZAAAA4VBMVEX///////38//8BRUcARkUAtreX2tsCR0KI19IAr7IAtrUAOjWjsrMAsbFngoQBtLiXsK6R3dp7lJMAO0GZ2N2GztIAsKkAMS6GmZhpfHwAPkAAMTKptrsIQkYhV1Rec26+0M7K2NcmTElQdXJ2i4rx+vkAJR3q8PGs6OkAPzUAODfg4+NMwMPP4NsuUlIuVVHO6+x+z8VFwLRtysZJvrnS8euw3NnAyMYAMycAJhEAHhMAqbM5amBCb3E/Z2SWpqWuw8NhgXlAW1aIpaBSZ2gAISEAFAMACg2dvrwAGRVskIu9/P1hAAAGxklEQVR4nO2ai3baOBBAZWGigIBQ0uVhWoIBYTDl0TQp6WOBpGHb7f9/0M5INpgUFpIAIZy554QYIYyuJY00BsYIgiAIgiAIgiAIgiAIgiAIgiAIgiAIYo4VeTwGLMaRl27G1rBO8sDH4xE6SSfz+dPj8XmD/XNUPsfWP8lk+i/yOVTI57Ahn8OGfA4LpRafv3KfweUntZAevGYfzq6v0vFPfCs+fMXxPrm+zCfj6cvokHuiTyRpepg/7TGd+pxPJJPJxAdlzS7pm3w8/gwf/qI+6jQNPvF4ZA6dpBOJxHPnz4tNP3UK6UEyfjafQ4MWMHjMOSw2aeQaDRePU41GLuPOfNSk2ACG22zyGj5C+pY8i6v1NVdhscxNu32TwuMLOPqSDXx4SkopHEcW93iDBXoIfJJP8bHCfxkphK99Sm1hF0Kf1FfbjgHOPn1AKJH4FleP+0R3CATXwPhI0z9tKZvZ4MRSgI7jOOXiVhu8DjUAHjeD1YUQtULVPJn5WBb78f3790pQXi0IYTuVv/8eTfYZ456CuoBr36yaJxGfhU4enwshRub4wH04+IgvVfMk4hPEAfMv60Bp3ZREHtm+1DrVYTWks/CKNxkXi+NJWFgdTka2EO1cFd7BF8ZbF9/sQR236mbe27Y9wnMqpqrDYfh2zt0hlu2aoqjNuLvtzsr5+E5IX/r2Xc7T3vC6sBGs2Y34MNaAEjmBSiOoE4tBPOgBHeZCeWV2eeBJr/vH52+bnGPCK2K327+C4s6oDUEYprYtCj28xq6050h3wafkxGIFjG99JzbjvcvccizWnAQjbjKNxWp78DmPRRD6MltM3d7AtBa+D0pC3nnax3QPSkrcFkR87MCnEvGpgY8fs2UpWIZGEMdr7n58ZAFo+tBDsu+hT6qAHrKesUFDlH9DhzWbBS2ENZudFT7TwrnAtRTqFLrMLeDw1MOVec39+fiNDuDW4eNF8xd+eyJR5971vM4tHrY9xqHCHeqMsS6P+FihD2dep5PD5XTk6Tocx+h7XHItloXjWO3ZQY6vJOJTMEu5Kjm2kBfw4VXYs9h62jDVa4PPWB9G158FHzN/9DnHErrHxGtYaOEKyQwW83vwKWf/v1HrdVTrdAUnwd468OG4LI7Bx65AO36fQ0/de4iqg4+84Bv5QK2xH/jgCTs4Wvs4yNweXKGyh6OTD1Y0qbVeSCXTmNn8STrcWwc+Fn78O1g7BPqMHBz4FyWkgiHh3tvMh8P+QPtYGp7xgz3e2Ldtv65DnbpKL+fD+tVJxePJs2XEoz7luY/pnz76QDzwfYnTR9iBDxQHPpa1iQ8blqFOxmPerW/HplXtM0hDco/EH/yt97EU1NzIh4f9M/eBTbKPQDrjP/SxlvvgmF3w8Uow4iC6D+F8Tl1HOnWVx+QYSC4Qj6/1sXC8LR1uicTZch/TP3U93jKZUkhRPckHAj8syjdjHRj8lJ7xAxjsy5u0iU/rZAXh5FvqUyzDcLtQiKcf9Set93k43mBr14fpV+EV3NSZjPx6VYugSevSMb4+Nj6YP2a8VacYr83i5+Jmk898bqrmUm3mg68JUfgBo85v8HAjvqpJ28hnl/WPxXEn4PSGEK+zX5vT6T/ezEdm9Hq6sU8XN04St4LVLbT20T6mf9hE722ao3oFmmLLkdlT5nzUnE6nPzvsoY9c4cP6wnC3nwTooQ+uP5ypBu59IGLDoy2+uGbt7zbD/XWYL/jGB6qt6B+LTZq4gAn5Yy86y9ZTRGUKwjYXVt78Cn8Ok/pX/uEDxSUpVvt4MQfP0tx9Kqcpil5PjE3/TGr9fk3n/tDIyajmQD4X65fccA5DcCjd9Sv9CuZzvAG1RQp7Do5q4XjLYrp3O/eBCO7jRfm9Hx3It10XcmVzKV2gE97fUNXUeDxOueYOdWDEPR3vMGZ48E7Xi5xDV/BM4j7XYUOde+w+U4jCrfltmtVRE9o7q2SF9zlmdzys4Kl52cgorrp6Q2v2BofMJuHK82Hw6cDybufNGQwG17sOoZ4JiOKmtOvu4SfpdP5y1zEn8CnUO+vrPgt+gtvb/M59fhbK0692ztv17x/f6C37zn34JJWddNWuhzU/0SnIt9kG3bputVpvH3l7fnN2/L2JQp1kPH01mH/f+A14rd/Xf86bbPd6XvY2/aTvgw+DwZVOcKOT51X7aKGr62jJ6/Zhg/yizmv3YQOlF4TZpu21+zCzYz4eH36E/cPYMfksQD6HDfkcNuRz2BydT+K4fFqJdPrZvx89KMz256VbsSUCkePxOaaRRhAEQRAEQRAEQRAEQRAEQRAEQRAEcYT8B7o3wuhBIgkLAAAAAElFTkSuQmCC"
                alt=''
                className='w-1/2 h-1/2 object-contain'
              />
              
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");