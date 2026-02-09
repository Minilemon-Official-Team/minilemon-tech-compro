export default function StepCard({ id, title, subtitle, isActive, onClick }) {
  return (
    <div className={`flex flex-col justify-center items-center gap-8 cursor-pointer group transition-all duration-500 ease-out ${isActive ? "scale-110 text-white" : "text-white/20"}`} 
    onClick={() => onClick(id)}>
      <div 
        className={`rounded-2xl w-32 h-32 p-16 border-4 text-6xl font-bold flex justify-center 
          items-center ${isActive ? "border-white" : "border-white/20"}`}
      >
        {id}
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-2xl leading-tight text-center">
          {title}
        </h3>
        <p className="leading-relaxed text-center">{subtitle}</p>
      </div>
    </div>
  );
}
