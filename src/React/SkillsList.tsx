import { useState } from "react";

const CategoryIcons = {
  "Software Engineering": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)]"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),

  "AI & Machine Learning": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)]"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 1v3" />
      <path d="M15 1v3" />
      <path d="M9 20v3" />
      <path d="M15 20v3" />
      <path d="M20 9h3" />
      <path d="M20 14h3" />
      <path d="M1 9h3" />
      <path d="M1 14h3" />
    </svg>
  ),

  "Automation & IoT": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)]"
    >
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),

  "Backend & Data": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)]"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  ),

  "Testing & Quality": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)]"
    >
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),

  "DevOps & Development Tools": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)]"
    >
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),

  "Web & UI": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)]"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h.01" />
      <path d="M10 8h.01" />
      <path d="M14 8h.01" />
      <path d="M6 12h12" />
      <path d="M6 16h8" />
    </svg>
  ),

    "Cloud & Infrastructure": (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[var(--sec)]"
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9H17a5 5 0 0 1 .5 9Z" />
    <path d="M12 12v6" />
    <path d="M9.5 15 12 12.5 14.5 15" />
  </svg>
),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Software Engineering": [
      "Python, Java, C/C++, C#/.NET and Kotlin",
      "React, Node.js and ASP.NET Core",
      "REST APIs and application development",
      "Object-oriented programming and software design",
    ],

    "AI & Machine Learning": [
      "Computer vision and object detection",
      "YOLO and LSTM-based machine learning",
      "PyTorch, TensorFlow and scikit-learn",
      "Model training, evaluation and experimentation",
    ],

    "Automation & IoT": [
      "Home Assistant and smart-home automation",
      "ESP32 and ESPHome development",
      "Zigbee, RF, MQTT and RTSP integrations",
      "Custom hardware and event-driven automation",
    ],

    "Backend & Data": [
      "SQL, MySQL and SQL Server",
      "Backend services and API integration",
      "Data processing and system integration",
      "Database design and application data management",
    ],

    "Testing & Quality": [
      "JUnit and automated testing",
      "Postman API testing",
      "Regression, integration, UAT and functional testing",
      "SonarQube, accessibility and quality analysis",
    ],

    "DevOps & Development Tools": [
      "Git, GitLab and collaborative development",
      "Jenkins and CI/CD pipelines",
      "Jira and Agile/Scrum workflows",
      "Build monitoring, debugging and troubleshooting",
    ],

    "Web & UI": [
      "React, Astro and Tailwind CSS",
      "JavaScript, TypeScript, HTML and CSS",
      "Responsive and interactive web interfaces",
      "Figma-based UI design and prototyping",
    ],

    "Cloud & Infrastructure": [
      "AWS and cloud-based application development",
      "Microsoft Entra ID and enterprise authentication",
      "IIS deployment and server configuration",
      "Application environments, networking and system integration",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do
      </h3>

      <p className="text-[var(--white-icon)] text-sm md:text-base mb-6 max-w-2xl">
        I work across different areas of software and technology, adapting to
        whatever a problem requires.
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="w-full bg-[#1414149c] rounded-2xl text-left hover:bg-[#1a1a1acc] transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category as keyof typeof CategoryIcons]}

                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-base md:text-lg">
                      {category}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-5 h-5 text-[var(--white)] transform transition-transform duration-300 flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="pl-1">•</span>
                      <span className="pl-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;