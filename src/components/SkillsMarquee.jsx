
export default function SkillsMarquee({ logos }) {
  const doubled = [...logos, ...logos];

  return (

    <div className="bg-radial from-indigo-900 to-transparent w-[100%]">

      <div className="overflow-hidden w-[300px] p-4">

        <div className="marquee-track">
          {doubled.map((logo, i) => (
            <img
              key={i}
              src={logo}
              className="h-15 mx-4 shrink-0"
            />
          ))}
        </div>
      </div>

    </div>
  );
}
