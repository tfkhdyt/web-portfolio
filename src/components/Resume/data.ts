export const ips = [3.5, 3.83, 3.9]

const ipk: string = (
  ips.reduce((acc, cur) => acc + cur, 0) / ips.length
).toFixed(2)

export const chartKuliahOptions = {
  aspectRatio: 1.3,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Semester',
      },
    },
    y: {
      display: true,
      beginAtZero: true,
      min: 0,
      max: 4.0,
      ticks: {
        stepSize: 1,
      },
    },
  },
}

export const chartKuliahPlugins = {
  subtitle: {
    display: true,
    text: `GPA: ${ipk}`,
  },
}
