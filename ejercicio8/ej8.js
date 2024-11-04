let votes = [0, 0, 0, 0, 0];
const labels = ["Socialistas", "Liberales", "Animalistas", "Centristas", "Ecologistas"];
const colors = ["#FF5A7D", "#3390E0", "#FFD966", "#A17AFF", "#4DBD98"];

const ctx = document.getElementById("votingChart").getContext("2d");
const votingChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: votes,
        backgroundColor: colors,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const party = labels[tooltipItem.dataIndex];
            const count = votes[tooltipItem.dataIndex];
            return `${party}: ${count}`;
          },
        },
      },
    },
  },
});

function vote(index) {
  votes[index]++;
  votingChart.update();
}

function resetVotes() {
  votes = [0, 0, 0, 0, 0];
  votingChart.data.datasets[0].data = votes;
  votingChart.update();
}


