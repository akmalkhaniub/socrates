import React from 'react';
import { ArrowUpRight, TrendingUp, Users, AlertCircle, BrainCircuit } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Active Students', value: '1,284', change: '+12%', icon: Users, color: 'text-blue-400' },
    { label: 'Avg. Mastery Score', value: '78%', change: '+5%', icon: TrendingUp, color: 'text-emerald-400' },
    { label: 'Mistakes Identified', value: '42,901', change: '+18%', icon: AlertCircle, color: 'text-amber-400' },
    { label: 'AI Sessions', value: '8,432', change: '+24%', icon: BrainCircuit, color: 'text-indigo-400' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Institutional Overview</h1>
          <p className="text-slate-500 mt-1">Real-time learning insights across all active cohorts.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-medium transition-all">Download Report</button>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-medium transition-all">Add Student</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-slate-800 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <Icon size={24} />
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded-full">
                  <ArrowUpRight size={12} />
                  {stat.change}
                </div>
              </div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1 tracking-tight">{stat.value}</h3>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mistake Heatmap */}
        <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold">Curriculum Pain Points</h3>
              <p className="text-sm text-slate-500">Most frequent mistakes by topic area</p>
            </div>
            <select className="bg-slate-800 border-none text-xs rounded-lg px-3 py-1.5 focus:ring-0">
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
            </select>
          </div>
          
          <div className="space-y-6">
            {[
              { topic: 'Quadratic Equations', count: 842, percentage: 85, color: 'bg-indigo-500' },
              { topic: 'Organic Chemistry: Isomers', count: 621, percentage: 72, color: 'bg-indigo-500' },
              { topic: 'Newtonian Mechanics', count: 542, percentage: 60, color: 'bg-indigo-500' },
              { topic: 'Metaphorical Analysis', count: 321, percentage: 45, color: 'bg-indigo-500' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.topic}</span>
                  <span className="text-slate-500">{item.count} mistakes identified</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} rounded-full transition-all duration-1000`} 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Students */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-6">Recent Insights</h3>
          <div className="space-y-4">
            {[
              { title: 'Algebra Breakthrough', desc: 'Sudden 15% mastery increase in Year 9 Math.', time: '2h ago', type: 'positive' },
              { title: 'Geometry Stagnation', desc: '12 students stuck on "Pythagorean Theorem" for >3 sessions.', time: '5h ago', type: 'alert' },
              { title: 'New Peer Support', desc: 'Socrates identifies 5 students eligible for Peer Mentoring.', time: '8h ago', type: 'info' },
            ].map((insight, i) => (
              <div key={i} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold">{insight.title}</h4>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{insight.time}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{insight.desc}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 border border-slate-700 hover:bg-slate-800 rounded-xl text-xs font-medium transition-all">
            View All Insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
