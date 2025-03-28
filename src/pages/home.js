import React, { useEffect, useRef } from "react"
import Layout from "../components/layout"

const features = [
  {
    title: "Login & Register",
    description: [
      "Login once using SSO (Single Sign-On) via Swift's UserDefaults and a session-based back end. Stay logged in unless you explicitly log out.",
      "Validates credentials using RegEx, checking for password length, field completeness, character limits, and invalid input.",
      "Registers new users by creating folders in the server's upload directory using a unique Profile ID from the database.",
      "Generates external-facing keys using Base64 encoding to uniquely identify users and posts for sharing.",
    ],
    imgSrc: "/images/features/phone_login-register.gif",
  },
  {
    title: "Configure",
    description: [
      "Pick the server side language you want Post.e to use.",
      "This will route the requests to the toggled language on the backend.",
      "Some languages are not yet supported, but the structure is in place for future expansion.",
    ],
    imgSrc: "/images/features/phone_config.gif",
  },
  {
    title: "Feed",
    description: [
      "Sort Posts by Newest, using the Post_Created column in descending order.",
      "Sort Posts by Home, prioritizing Love Count, then Pin Count, Reply Count, and Post Created Date/Time.",
      "Home feed is optimized for engagement and discovery by leveraging multiple columns in the query.",
      "Click a user's profile name to segue to their Profile screen.",
    ],
    imgSrc: "/images/features/phone_feed.gif",
  },
  {
    title: "Interactions",
    description: [
      "View newly joined users on the app.",
      "Click on a user's profile name to segue to their Profile screen.",
      "Follow or unfollow users directly from the Interaction screen.",
    ],
    imgSrc: "/images/features/phone_interaction.gif",
  },
  {
    title: "Profile",
    description: [
      "View your Followers, Following, and Post count, with interactive segues to the Interaction screen.",
      "Sort your Profile feed by Newest, Oldest, Loved, Pinned, or Replied.",
      "Edit your Profile: update your username, change/remove your profile picture, or delete your account.",
      "Create new Posts, pull to refresh, and scroll to load more Posts in chunks of 25.",
      "Post rows support actions like pinning, replying, loving, deleting, and viewing attachments.",
    ],
    imgSrc: "/images/features/phone_profile.gif",
  },
  {
    title: "Reply",
    description: [
      "Reply to a Post on a dedicated screen, with the original Post displayed in the header.",
      "Supports replying to a Reply — with unlimited nesting depth.",
      "Sort the Reply feed by: Newest, Oldest, Loved, or Replied counts.",
    ],
    imgSrc: ["/images/features/phone_reply_2.png"],
  },
  {
    title: "Post",
    description: [
      "Type up a new Post and submit it to the server.",
      "Cancel a Post by tapping the Cancel button or navigating to the Profile screen.",
      "Receive haptic and audio feedback after successful submission.",
    ],
    imgSrc: ["/images/features/phone_post.gif"],
  },
  {
    title: "Attachments",
    description: [
      "While you're entering a Post, you can add photos, videos, or any file type from your Camera, Photo Library, or Files app.",
      "All file types are supported, including media, documents, archives, and more.",
    ],
    imgSrc: ["/images/features/phone_attachments.png"],
  },
  {
    title: "Settings",
    description: [
      "View the current Post.e version number from the app’s Info.plist.",
      "Select your preferred language and view available translations supported by Post.e.",
      "Displays your current folder directory used for file attachments, including toggling the sample files folder.",
      "Change your password or log out, which also ends your server session.",
    ],
    imgSrc: "/images/features/phone_settings-logout.gif",
  },
  {
    title: "watchOS App",
    description: [
      "Post to your Profile using voice-to-text or the Apple Watch keyboard.",
      "Receive haptic and audio feedback after a successful Post submission.",
    ],
    imgSrc: "/images/features/watch_support.gif",
  },
  {
    title: "Language Localization",
    description: [
      "English and Russian language support powered by Apple's Localization system.",
      "Supported languages can also be queried from the language table in the database.",
    ],
    imgSrc: ["/images/features/phone_language_support.gif"],
  },
  {
    title: "Dark Mode",
    description: [
      "Easily toggle between Light and Dark Mode for a different visual experience.",
      "Dark Mode offers a sleek look that's easier on the eyes in low-light environments.",
    ],
    imgSrc: "/images/features/phone_dark_support.gif",
  },
]

export default function Features() {
  const featureRefs = useRef([])

  useEffect(() => {
    const currentRefs = featureRefs.current // Copy the refs to a local variable
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is visible
    }

    const callback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
        /*
        else {
          entry.target.classList.remove("in-view");
        }
        */
      })
    }

    const observer = new IntersectionObserver(callback, options)

    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <Layout>
      <h1>🟨 🟧 🟥 Post.e 🟥 🟧 🟨</h1>
      <p className="content-center">
        Learn how to build and structure your own social media application using{" "}
        <strong>Post.e!</strong>
      </p>

      <div class="feature-preview-row">
        <img src="/images/features/phone_feed.gif" alt="Feed" />
        <img src="/images/features/phone_post.gif" alt="Post" />
        <img src="/images/features/phone_splash.png" alt="Splash" class="splash-only-desktop" />
        <img src="/images/features/phone_profile.gif" alt="Profile" />
        <img src="/images/features/phone_interaction.gif" alt="Interaction" />
      </div>

      <h2>What is Post.e?</h2>
      <div className="intro-list-container">
        <ul className="intro-list">
          <li>
            <b>Post.e</b> is an open source iOS mobile application built using Swift and Objective-C for the
            client side.
          </li>
          <li>
            Users can create profiles, follow others, and post messages similar
            to Twitter/X.
          </li>
          <li>
            Supports media-rich posts with photos, videos, documents, and file
            attachments.
          </li>
          <li>
            Supports multiple server-side languages, including PHP, Python,
            Node.js, Ruby, Go, Java, Rust, and Perl.
          </li>
          <li>
            Powered by a MySQL-compatible MariaDB database, with JSON-based data interchange and
            built-in API support.
          </li>
          <li>
            Designed to teach users how to build their own social media app from
            the ground up.
          </li>
        </ul>
        <div class="github-button-wrapper">
          <a
            href="https://github.com/scottgriv/Post.e"
            target="_blank"
            class="github-button"
          >
            <i class="fab fa-github"></i>
            View on GitHub
          </a>
        </div>
      </div>
      <h2>Features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div
            className="feature-item"
            key={index}
            ref={el => (featureRefs.current[index] = el)}
          >
            {/* Mobile-only title */}
            <h3 className="feature-title mobile-only">{feature.title}</h3>

            <img src={feature.imgSrc} alt={feature.title} />

            <div className="feature-content">
              {/* Desktop-only title */}
              <h3 className="feature-title desktop-only">{feature.title}</h3>

              {Array.isArray(feature.description) ? (
                <ul className="feature-description-list">
                  {feature.description.map((item, index) => (
                    <li key={index} className="feature-description">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="feature-description">{feature.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div class="github-button-wrapper">
        <a
          href="https://github.com/scottgriv/Post.e"
          target="_blank"
          class="github-button"
        >
          <i class="fab fa-github"></i>
          View on GitHub
        </a>
      </div>
    </Layout>
  )
}
