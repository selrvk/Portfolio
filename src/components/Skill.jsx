const fileMap = {
  html: "png",
  css: "png",
  php: "png",
  react: "png",
  tailwind: "png",
  typescript: "png",
  node: "png",
  nextjs: "svg",
  vite: "svg",
};

export default function Skill({ skill }) {
  const ext = fileMap[skill] || "png";
  return (
    <div>
      <img
        src={`/logos/${skill}.${ext}`}
        className="h-10 w-auto"
        alt={skill}
      />
    </div>
  );
}
