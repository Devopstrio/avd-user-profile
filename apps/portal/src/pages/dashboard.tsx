import React from 'react';

// Devopstrio AVD User Profile
// Executive Profile Operations & Storage Performance Command Center

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-indigo-500/30">
            {/* Global Operations Header */}
            <header className="border-b border-white/5 bg-black/40 backdrop-blur-3xl sticky top-0 z-50">
                <div className="max-w-screen-2xl mx-auto px-10 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center font-black text-white shadow-[0_0_25px_rgba(79,70,229,0.4)] border border-white/10 relative overflow-hidden">
                            UP
                            <div className="absolute top-0 right-0 w-2 h-2 bg-indigo-400 rounded-full m-1 border border-black shadow-[0_0_50px_10px_rgba(129,140,248,0.5)]"></div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-white tracking-widest leading-none text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">USER PROFILE PLATFORM</h1>
                            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] mt-2 italic">Data-Centric Resilience & Scale</p>
                        </div>
                    </div>
                    <nav className="flex gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                        <a href="#" className="text-indigo-400 border-b-2 border-indigo-500 pb-10 pt-10">Ops Overview</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Profile Inventory</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Storage Tiers</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Recovery Vault</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Analytics</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-screen-2xl mx-auto px-10 py-12">

                {/* Global Health & Login SLA Scorecards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {[
                        { label: 'Avg. Login Attach', value: '1.4s', status: 'Optimal', color: 'emerald' },
                        { label: 'Total Managed Data', value: '142 TB', status: '+4.2% Growth', color: 'indigo' },
                        { label: 'Profile Health Score', value: '99.8%', status: '2 Corrupted', color: 'rose' },
                        { label: 'Backup Readiness', value: '100%', status: 'Snapshot-Verify', color: 'emerald' }
                    ].map((kpi, idx) => (
                        <div key={idx} className="bg-slate-900/40 p-10 rounded-[2.5rem] border border-white/5 hover:border-indigo-500/40 transition-all shadow-2xl relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/10 transition-all"></div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">{kpi.label}</span>
                            <div className="text-4xl font-black text-white tracking-tighter mb-4 font-mono">{kpi.value}</div>
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-${kpi.color}-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]`}></div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{kpi.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Automation Intelligence & Storage Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">

                    {/* Live Profile Stream & Ops Feed */}
                    <div className="xl:col-span-2 bg-slate-900 p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <h2 className="text-3xl font-black text-white tracking-tight">Active Performance Monitoring</h2>
                                <p className="text-slate-400 text-sm mt-2 max-w-lg">Monitoring global FSLogix attach durations, container health, and storage hub latency.</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-black hover:bg-slate-800 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border border-white/10">
                                    Export SLA Audit
                                </button>
                                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-indigo-900/40">
                                    Initiate Global Repair
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { user: 'mani@devopstrio.com', region: 'UK South', attach: '0.8s', state: 'Healthy', type: 'AzureFiles' },
                                { user: 'dev-01@devopstrio.co.uk', region: 'East US 2', attach: '1.2s', state: 'Healthy', type: 'NetApp' },
                                { user: 'ceo@devopstrio.com', region: 'UK South', attach: '1.5s', state: 'Healthy', type: 'AzureFiles' },
                                { user: 'temp-882@outlook.com', region: 'North Europe', attach: '2.4s', state: 'Repair-Active', type: 'Ephemeral' }
                            ].map((row, idx) => (
                                <div key={idx} className="p-8 bg-black/40 rounded-[2rem] border border-white/5 group hover:border-indigo-500/20 transition-all flex justify-between items-center">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center border border-indigo-500/20">
                                            <span className="text-indigo-400 text-sm font-black italic">{row.type[0]}</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-black text-white">{row.user}</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{row.region} &bull; {row.type}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-12">
                                        <div className="text-right">
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Attach Time</div>
                                            <div className="text-xl font-black text-white font-mono">{row.attach}</div>
                                        </div>
                                        <div className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${row.state === 'Healthy' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                                            {row.state}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Storage Fabric & Capacity Stack */}
                    <div className="flex flex-col gap-10">
                        <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl flex-1 flex flex-col">
                            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-8 border-b border-white/5 pb-6">Storage Tier Utilization</h3>
                            <div className="space-y-8 flex-1">
                                {[
                                    { hub: 'Premium-UKS-Hub-01', total: '100TB', used: 84, col: 'indigo' },
                                    { hub: 'Ultra-ANF-Prod-01', total: '200TB', used: 42, col: 'purple' },
                                    { hub: 'Standard-DR-West-01', total: '50TB', used: 12, col: 'pink' },
                                    { hub: 'Cold-Audit-Vault', total: '500TB', used: 18, col: 'emerald' }
                                ].map((hub, i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{hub.hub}</span>
                                            <span className="text-[10px] font-black text-slate-500 font-mono">{hub.used}% / {hub.total}</span>
                                        </div>
                                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                            <div className={`h-full bg-${hub.col}-500 transition-all duration-1000`} style={{ width: `${hub.used}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-10 bg-black hover:bg-slate-800 text-white text-[11px] font-black py-4 rounded-2xl border border-white/10 uppercase tracking-widest transition-all">
                                Manage Volumes
                            </button>
                        </div>

                        <div className="bg-indigo-600 p-10 rounded-[3rem] shadow-[0_0_50px_rgba(79,70,229,0.3)] relative overflow-hidden group border border-white/10">
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-all"></div>
                            <h4 className="text-[10px] font-black text-indigo-100 uppercase tracking-widest mb-4 leading-none">Resilience Insight</h4>
                            <div className="text-2xl font-black text-white tracking-tight mb-4">Cross-Region Sync Confirmed</div>
                            <p className="text-xs text-indigo-500 bg-white/90 font-black px-6 py-4 rounded-2xl shadow-xl leading-relaxed">
                                Primary profiles (UKS) synchronized with DR Standby (UKW). RPO is <span className="underline font-black">2 minutes</span>.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Resilience & Cost Recovery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className="bg-slate-900 p-10 rounded-[3.5rem] border border-white/5 shadow-xl">
                        <div className="flex justify-between items-center mb-10">
                            <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Profile Growth Trend (30d)</h5>
                            <div className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">+1.2 TB / DAY</div>
                        </div>
                        <div className="flex items-end gap-1.5 h-32 px-2">
                            {[12, 14, 11, 28, 42, 18, 14, 12, 10, 8, 12, 14, 9, 7, 12, 15, 22, 18, 14, 28, 32, 42].map((v, i) => (
                                <div key={i} className="flex-1 bg-indigo-500/20 rounded-t-lg hover:bg-indigo-500 transition-all relative group cursor-pointer" style={{ height: `${v * 2}%` }}>
                                    <div className="absolute -top-10 left-1/2 -ms-4 opacity-0 group-hover:opacity-100 bg-white text-black text-[10px] font-black px-2 py-1 rounded shadow-xl pointer-events-none transition-all">
                                        +{v} GB
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 p-10 rounded-[3.5rem] border border-white/5 shadow-xl flex flex-col justify-between">
                        <div>
                            <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Snapshot & Recovery Integrity</h5>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-black/40 rounded-3xl border border-white/5 text-center">
                                    <div className="text-[9px] font-black text-slate-500 uppercase mb-2">Retention</div>
                                    <div className="text-xl font-black text-white">30 Days</div>
                                </div>
                                <div className="p-6 bg-black/40 rounded-3xl border border-white/5 text-center">
                                    <div className="text-[9px] font-black text-slate-500 uppercase mb-2">SLA Verify</div>
                                    <div className="text-xl font-black text-emerald-400">PASSED</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex items-center justify-between p-6 bg-indigo-500/5 rounded-3xl border border-indigo-500/10">
                            <div className="text-xs font-bold text-slate-400 tracking-tight">Last point-in-time recovery point was validated <span className="text-white">12m ago</span>.</div>
                            <button className="text-[10px] font-black text-indigo-400 uppercase tracking-widest whitespace-nowrap">Open Vault</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
