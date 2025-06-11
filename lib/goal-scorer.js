/** Score is based on benefit/time/cost multiplier */
export function scoreGoals(goals) {
    return goals.map(g => {
        const benefitWeight = g.benefit || 1;
        const timePenalty = g.time || 1;
        const costPenalty = g.cost || 1;
        const score = (benefitWeight * 10) / (timePenalty + costPenalty);
        return { ...g, score: Math.round(score * 100) / 100 };
    });
}

