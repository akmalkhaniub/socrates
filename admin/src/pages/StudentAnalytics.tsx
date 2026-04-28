import React from 'react';
import { Search, Filter, MoreVertical, ExternalLink } from 'lucide-react';

const StudentAnalytics = () => {
  const students = [
    { id: 'S-001', name: 'Alex Rivera', grade: 'Grade 10', mastery: 88, activeTime: '45h', lastActive: '2m ago', status: 'Online' },
    { id: 'S-002', name: 'Sarah Chen', grade: 'Grade 11', mastery: 94, activeTime: '120h', lastActive: '15m ago', status: 'Offline' },
    { id: 'S-003', name: 'Marcus Johnson', grade: 'Grade 10', mastery: 62, activeTime: '32h', lastActive: '1h ago', status: 'Online' },
    { id: 'S-004', name: 'Leila Smith', grade: 'Grade 9', mastery: 75, activeTime: '68h', lastActive: '3h ago', status: 'Offline' },
    { id: 'S-005', name: 'Yuvraj Singh', grade: 'Grade 10', mastery: 81, activeTime: '55h', lastActive: '5h ago', status: 'Offline' },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Analytics</h1>
          <p className="text-slate-500 mt-1">Deep-dive into individual learning trajectories.</p>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-900/30">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Filter by name, ID or grade..." 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 text-sm"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-medium border border-slate-700 transition-all">
              <Filter size={16} />
              Filter
            </button>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-medium transition-all">Export CSV</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-800/20">
                <th className="p-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Student</th>
                <th className="p-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Current Mastery</th>
                <th className="p-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Active Time</th>
                <th className="p-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="p-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Interaction</th>
                <th className="p-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-indigo-400">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{student.name}</p>
                        <p className="text-xs text-slate-500">{student.id} • {student.grade}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-2 w-24 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${student.mastery > 90 ? 'bg-emerald-500' : student.mastery > 70 ? 'bg-indigo-500' : 'bg-amber-500'}`}
                          style={{ width: `${student.mastery}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold">{student.mastery}%</span>
                    </div>
                  </td>
                  <td className="p-6 text-sm text-slate-400 font-medium">{student.activeTime}</td>
                  <td className="p-6">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                      student.status === 'Online' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-slate-700 text-slate-400'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-6 text-sm text-slate-500">{student.lastActive}</td>
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-indigo-400/10 rounded-lg">
                        <ExternalLink size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:bg-slate-700 rounded-lg">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentAnalytics;
