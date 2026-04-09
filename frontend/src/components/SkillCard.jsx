export default function SkillCard({ name, level }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-dark">{name}</span>
        <span className="text-primary font-bold">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-primary via-secondary to-accent h-full rounded-full transition-all duration-1000 ease-out hover:shadow-lg"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  )
}
