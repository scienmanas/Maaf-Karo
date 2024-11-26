"use client";

import { ReactTyped } from "react-typed";
import { SubmissionLoader } from "@/app/ui/loader";
import { useState } from "react";
import { legends } from "@/app/data/legends";
import Image from "next/image";
import { StaticImageData } from "next/image";
import dummyImg from "@/public/dummy.png";
import { fetchReadme } from "@varandas/fetch-readme";

interface UserCapabilities {
  name: string;
  blog?: string;
  location?: string;
  company?: string;
  bio?: string;
  followers?: number;
  following?: number;
  public_repos?: number;
  profileReadme?: string;
  reposReadme: {
    name: string;
    readme: string;
  }[];
}

function UrlToFetch(userName: string) {
  return {
    profile: `https://api.github.com/users/${userName}`,
    profileReadme: `https://raw.githubusercontent.com/${userName}/${userName}/main/README.md`,
    profileRepos: `https://api.github.com/users/${userName}/repos?per_page=1000`, // to get all repos
    lambda:
      "",
  };
}

export function Troller() {
  const [userImage, setUserImage] = useState<StaticImageData | null>(null);
  const [fetchedStatus, setFetchedStatus] = useState<string>("Get Trolled");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [legend, setLegend] = useState(legends[0]);
  const [trollResponse, setTrollResponse] = useState<string | null>(null);
  const [showTypingCursor, setShowTypingCursor] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowTypingCursor(true);
    let userCapabilities: UserCapabilities = {
      name: "",
      reposReadme: [],
    };

    // Update Fetching states
    setIsFetching(true);
    setFetchedStatus("profile...");

    // Get the data from the form
    const formData = new FormData(e.currentTarget);
    const userName = formData.get("userName") as string;
    const legend = formData.get("legend") as string;

    // Get all urls to fetch
    const urls = UrlToFetch(userName);

    try {
      const profile = await fetch(urls.profile, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Get the profile data and update the userImage
      const profileData = await profile.json();
      setUserImage(profileData.avatar_url);
      userCapabilities = {
        name: profileData.name,
        blog: profileData.blog || null,
        location: profileData.location || null,
        company: profileData.company || null,
        bio: profileData.bio || null,
        followers: profileData.followers || 0,
        following: profileData.following || 0,
        public_repos: profileData.public_repos || 0,
        reposReadme: [],
      };

      // Fetch the readme
      setFetchedStatus("readme...");
      try {
        await fetchReadme({
          username: "scienmanas",
          repository: "scienmanas",
        }).then((readme) => {
          userCapabilities.profileReadme = readme;
        });
      } catch (error) {
        userCapabilities.profileReadme = "No readme found";
      }

      // Fetch the repos
      setFetchedStatus("repos...");
      const repos = await fetch(urls.profileRepos, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const AllReposData = await repos.json();
      const reposWithStarOrFork = await AllReposData.filter(
        (repo: any) => repo.stargazers_count > 0 || repo.forks > 0
      );
      const reposNames = await reposWithStarOrFork.map(
        (repo: any) => repo.name
      );

      // Fetch the repos data
      setFetchedStatus("repos data...");
      for (const repo of reposNames) {
        try {
          const readme = await fetchReadme({
            username: userName,
            repository: repo,
          });
          userCapabilities.reposReadme.push({
            name: repo,
            readme: readme,
          });
        } catch (error) {
          console.log("Lahg gayeeee");
          userCapabilities.reposReadme.push({
            name: repo,
            readme: "No readme found",
          });
        }
      }

      // Call the genai lambda function & send teh converted json data
      setFetchedStatus("Trolling...");
      const genaiResponse = await fetch(urls.lambda, {
        method: "POST",
        body: JSON.stringify({
          // userName: userName,
          userData: userCapabilities,
          // legendName: legend.name,
          legendData: "He is legend Harry has 4000+ followers and 1000+ repos.",
        }),
      });

      const genaiResponseData = await genaiResponse.json();
      if (genaiResponseData.statusCode === 200) {
        const parsedData = JSON.parse(genaiResponseData.body);
        console.log(parsedData);
        setTrollResponse(parsedData.message || "No response generated");
      } else {
        setFetchedStatus("Get Trolled");
        setUserImage(null);
        setTrollResponse("");
      }
    } catch (error) {
      console.log(error);
      // setError("User not found");
      // implement toast here
      setFetchedStatus("Get Trolled");
      setTrollResponse("");
    } finally {
      setIsFetching(false);
      setFetchedStatus("Less Go");
    }
  };

  return (
    <section className="flex pb-28 flex-col w-full h-fit items-center justify-center gap-14 p-8">
      <div className="pics w-full h-fit flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12">
        <div className="legend-pic w-fit h-fit transform transition-transform hover:scale-105 duration-300">
          <Image
            src={legend.image as StaticImageData}
            alt={legend.name}
            width={200}
            height={200}
            className="rounded-full shadow-[0_0_20px_rgba(0,0,0,0.2)] object-cover object-center border-4 border-black"
          />
        </div>
        <div className="vs-symbol flex flex-col items-center gap-2">
          <div className="text-base sm:text-lg md:text-xl lg:text-4xl font-black bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
            VS
          </div>
          <div className="md:w-32 w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
        <div className="user-pic w-fit h-fit transform transition-transform hover:scale-105 duration-300">
          <Image
            src={userImage ? (userImage as StaticImageData) : dummyImg}
            alt="user"
            width={200}
            height={200}
            className="rounded-full shadow-[0_0_20px_rgba(0,0,0,0.2)] object-cover  border-4 border-black"
          />
        </div>
      </div>
      <div className="form w-full max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col w-full items-center gap-4 sm:gap-6 md:gap-8"
        >
          <div className="relative name-email flex flex-row gap-6 w-full justify-center items-center px-3">
            <label
              htmlFor="userName"
              className="user-name relative w-[49.5%] max-w-[250px] h-fit"
            >
              <input
                minLength={2}
                autoComplete="off"
                required
                placeholder="only username 😅"
                type="text"
                name="userName"
                id="userName"
                className="relative z-10 rounded-xl px-4 py-3 border-2 border-neutral-300 w-full h-12 bg-white text-base outline-none hover:border-black focus:border-black transition-colors duration-300 text-neutral-800 placeholder:text-neutral-400"
              />
              <div className="text-sm sm:text-balance placeholder absolute z-20 top-0 left-2 -translate-y-1/2 px-2 bg-white text-black font-medium font-mono">
                github
              </div>
            </label>

            <label
              htmlFor="legend"
              className="legend-select relative w-[49.5%] max-w-[250px] h-fit"
            >
              <select
                onChange={(e) =>
                  setLegend(
                    legends.find((legend) => legend.name === e.target.value) ||
                      legends[0]
                  )
                }
                id="legend"
                className="w-full h-12 rounded-xl px-4 py-3 bg-white border-2 border-neutral-300 hover:border-black transition-colors duration-300 cursor-pointer "
              >
                {legends.map((legend, index) => (
                  <option key={index} value={legend.name}>
                    {legend.name}
                  </option>
                ))}
              </select>
              <div className="text-sm sm:text-base placeholder absolute z-20 top-0 left-2 -translate-y-1/2 px-2 bg-white text-black font-medium font-mono">
                Legend 🔥
              </div>
            </label>
          </div>

          <div className="buttons flex flex-row items-center justify-center gap-6">
            <button
              onClick={() => {
                setUserImage(null);
              }}
              type="reset"
              className={`w-32 h-12 rounded-xl bg-white border-2 border-black text-black font-medium transition-colors duration-300 ${
                isFetching
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-red-700 hover:text-white"
              }`}
            >
              Reset
            </button>
            <button
              disabled={isFetching}
              type="submit"
              className={`w-36 h-12 rounded-xl bg-black font-semibold text-white  transition-colors duration-300 flex flex-row items-center justify-center gap-2 ${
                isFetching
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:border-2 hover:border-black"
              }`}
            >
              <span>{fetchedStatus}</span>

              {isFetching && (
                <SubmissionLoader color="pink" height="20px" width="20px" />
              )}
            </button>
          </div>
        </form>
      </div>

      {trollResponse && (
        <div className="response-container w-full max-w-2xl mx-auto">
          <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.1)] transform transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-neutral-200">
              Legend's Response 🔥
            </h3>
            <div className="response-text">
              <ReactTyped
                strings={[trollResponse]}
                typeSpeed={40}
                className="text-neutral-700 font-medium leading-relaxed"
                cursorChar="|"
                showCursor={showTypingCursor}
                onComplete={() => setShowTypingCursor(false)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
