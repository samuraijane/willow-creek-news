const getTotals = (views) => {
  let totalCount = 0;
  let totalSessionIds = 0;
  
  views.forEach(viewer => {
    totalCount += viewer.count;
    totalSessionIds += 1;
  });

  return { totalCount, totalSessionIds };
};

module.exports = { getTotals };
