//
export default function SkeletonLoader() {
  let semesters = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
  return (
    <section id="MallaSkeleton">
      {semesters.map((semester, index) => (
        <div className="semester" key={index}>
          <div className="title">
            {semester}
          </div>
          {Array.from({length: Math.floor(Math.random() * (5 - 3 + 1)) + 3}, (_, i) => (
            <div className="skeleton task" key={i} />
          ))}
        </div>
      ))}
    </section>
  );
};