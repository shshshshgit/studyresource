function searchSubjects() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".card");
}

const booksData = {
  "1st Year Semester 1": {
    "Mathematics-I": [
      {
        author: "B.S. Grewal",
        link: "https://drive.google.com/file/d/1ojujo8MD2CdnK9CGnc42LyLIeHrj-NEe/view?usp=sharing",
      },
      {
        author: "Erwin Kreyszig",
        link: "https://drive.google.com/file/d/1GyO54mB7mT79v4Pe26man_IOpvP2fRcB/view?usp=sharing",
      },
    ],
    EDC: [
      {
        author: "Donald A. Neamen",
        link: "https://drive.google.com/file/d/17lBP_7CcHVxdSR2DE5Z5Xv_LZE7eqA8M/view?usp=sharing",
      },
      {
        author: "Jacob Milliman",
        link: "https://drive.google.com/file/d/1d6P2-R7QqAP3VYjCzDGMRm5CYx2YmcQw/view?usp=sharing",
      },
      {
        author: "Jasprit Singh",
        link: "https://drive.google.com/file/d/1JbZLDHCiAElbks54qwgeoSgflyDEj29a/view?usp=sharing",
      },
      {
        author: "Thomas L. Floyd",
        link: "https://drive.google.com/file/d/1_gbIVXsz4DCRw9SxMtaKJu9CY0xPYIsy/view?usp=sharing",
      },
      {
        author: "Donald A. Neamen",
        link: "https://drive.google.com/file/d/17lBP_7CcHVxdSR2DE5Z5Xv_LZE7eqA8M/view?usp=sharing",
      },
      {
        author: "Guangye Zhang,Chen Xie,Peng You,Shunpu Li",
        link: "https://drive.google.com/file/d/1c27chh5zfP_c1A7omvGwILgCZVfh2RNK/view?usp=sharing",
      },
      {
        author: "Michael Shur",
        link: "https://drive.google.com/file/d/1MstZPCMC75WH1lzIpCprT2wvM-ghuNze/view?usp=sharing",
      },
      {
        author: "Robert F.Pierret",
        link: "https://drive.google.com/file/d/1j5IdDmEFKQksjrDFL6urkywLTjcFNj1E/view?usp=sharing",
      },
    ],
    "Network theory": [
      {
        author: "Anant Agarwal, jeffrey h. lang",
        link: "https://drive.google.com/file/d/1LAL7XRaphV9Smtjbkuo9vBzNjMV782kc/view?usp=sharing",
      },
      {
        author: "Mahmood Nahvi, Joseph A.",
        link: "https://drive.google.com/file/d/1urUas46dq7PTtKBkLfi5bitZ2rpExviz/view?usp=sharing",
      },
      {
        author: "Charles K. Alexander,Matthew N. O. Sadiku",
        link: "https://drive.google.com/file/d/10JWEhgxoyoCM2qvwg8XtB-BlsaVKyAyT/view?usp=sharing",
      },
      {
        author: "Franklin F.kuo",
        link: "https://drive.google.com/file/d/15g2HOHu7YUsIF0if1VjuM0tbc-eLXldl/view?usp=sharing",
      },
      {
        author: "William H. Hayt, Jack E.Kemmerly",
        link: "https://drive.google.com/file/d/1y0Ca_PZPyE4KXHXFVSs3BLYf2pvUuko1/view?usp=sharing",
      },
    ],
    "Digital Electronics": [
      {
        author: "Thomas L. Floyd",
        link: "https://drive.google.com/file/d/1olVAf3qgg10MEbDlNEmbP_tCYRdQwsKL/view?usp=sharing",
      },
      {
        author: "Albert Paul Malvino, Jerlad A.Brown",
        link: "https://drive.google.com/file/d/134VCO7uVjAPYmW-W_LyfWE94vIWt_vdK/view?usp=sharing",
      },
      {
        author: "William Kleitz",
        link: "https://drive.google.com/file/d/16PzqSG04klEW9cFKOkoHvq1l0Tdq75et/view?usp=sharing",
      },
      {
        author: "R P Jain",
        link: "https://drive.google.com/file/d/1axcSH-P0mGw1V5cVwIGa86Gr_JLLWWMI/view?usp=sharing",
      },
      {
        author: "M. Morris Mano, Michael D. Ciletti",
        link: "https://drive.google.com/file/d/1sGR1uJsg8V76fa1gNfO81Q0rV7RHvL2d/view?usp=sharing",
      },
      {
        author: "Ronald J. Tocci, Neal S. Widmer, Gregory L. Moss",
        link: "https://drive.google.com/file/d/15pFP_FU-_lRf1qC5o9u2MMJF9fWZk7Zs/view?usp=sharing",
      },
      {
        author: "Larry L.Kinney, Charles H.Roth",
        link: "https://drive.google.com/file/d/1FlfOIQda0StZ04Ob4J14pdSb5r9IbbtQ/view?usp=sharing",
      },
    ],
  },
  "1st Year Semester 2": {
    "Mathematics-II": [
      {
        author: "Erwin Kreyszig",
        link: "https://drive.google.com/file/d/1GyO54mB7mT79v4Pe26man_IOpvP2fRcB/view?usp=sharing",
      },
      {
        author: "B.S. Grewal",
        link: "https://drive.google.com/file/d/1ojujo8MD2CdnK9CGnc42LyLIeHrj-NEe/view?usp=sharing",
      },
    ],
    "Engineering Circuit Analaysis": [
      {
        author: "William H. Hayt, Jr.",
        link: "https://drive.google.com/file/d/1JHB4b0NuLSMQU2Pt7DgViUshfOvA5Qal/view?usp=sharing",
      },
    ],
  },

  "2nd Year Semester 1": {
    "Mathematics-I": [
      {
        author: "B.S. Grewal",
        link: "https://drive.google.com/file/d/1ojujo8MD2CdnK9CGnc42LyLIeHrj-NEe/view?usp=sharing",
      },
      {
        author: "Erwin Kreyszig",
        link: "https://drive.google.com/file/d/1GyO54mB7mT79v4Pe26man_IOpvP2fRcB/view?usp=sharing",
      },
    ],
    "Analog Communications": [
      {
        author: "Herbert Taub",
        link: "https://drive.google.com/file/d/12iMM8pcekcfZGsReIjIa-GEl7V46mMs3/view?usp=sharing",
      },
      {
        author: "written notes unit-1",
        link: "https://drive.google.com/file/d/1Kej9ylMr4G-FzMHx6mq8OcdKry74hffB/view?usp=sharing",
      },
      {
        author: "written notes unit-2",
        link: "https://drive.google.com/file/d/1wiFzcTorog7XTt8qzclkzfOHCHicZJN2/view?usp=sharing",
      },
      {
        author: "written notes unit-3",
        link: "https://drive.google.com/file/d/1Rl1aYqo_9LJzogMNnVTVeb-3bauYy6-m/view?usp=sharing",
      },
      {
        author: "written notes unit-4",
        link: "https://drive.google.com/file/d/1Y92aVdBx_4E_GUyOnSl5yNlysmsxIf13/view?usp=sharing",
      },
      {
        author: "written notes unit-5",
        link: "https://drive.google.com/file/d/1tPquO0_yTEL1IZa_0fE8tn_DBoWC7dfZ/view?usp=sharing",
      },
    ],
    "signals and systems": [
      {
        author: "A.Anand Kumar",
        link: "https://drive.google.com/file/d/1_h1U7ACQJoa7ykeYKT3CUk24FHRp9Kco/view?usp=sharing",
      },
      {
        author: "BENOIT BOULET",
        link: "https://drive.google.com/file/d/1K-S2OuZxVDOHV8BxHdAcVycusfke-9v2/view?usp=sharing",
      },
      {
        author: "Alan V. Oppenheim",
        link: "https://drive.google.com/file/d/1AHNez5CRf2y1wOWCYHImdh6OgWHN8flf/view?usp=sharing",
      },
      {
        author: "written notes",
        link: "https://drive.google.com/file/d/1jMNA5N1YKy_lvh0i1roqeC23TC1QhOyb/view?usp=sharing",
      },
    ],
    "MANAGERIAL ECONOMICS AND FINANCIAL ANALYSIS": [
      {
        author: "Aryasri",
        link: "https://drive.google.com/file/d/1yK4FjhLOFgc2Wwv2NI2ij-iozljPxVCb/view?usp=sharing",
      },
      {
        author: "written notes unit-1",
        link: "https://drive.google.com/file/d/1hBURWlvb56tHvBE2GaLjrjfzAkXpR5sn/view?usp=sharing",
      },
      {
        author: "written notes unit-2",
        link: "https://drive.google.com/file/d/1td2SspwB35TX8S4eiIw-yfd55FlOqD5C/view?usp=sharing",
      },
      {
        author: "written notes unit-3",
        link: "https://drive.google.com/file/d/1XAT2awZrxemUAmYKSmcoybf4X_L5dUs6/view?usp=sharing",
      },
      {
        author: "written notes unit-4",
        link: "https://drive.google.com/file/d/1guuZYbKorg6ThqZRGROA7HGfRNnV3QI-/view?usp=sharing",
      },
      {
        author: "written notes unit-5",
        link: "https://drive.google.com/file/d/1ZnsuZ3JWWrCWtsV7mILbvCNjf4l17hai/view?usp=sharing",
      },
    ],
    python: [
      {
        author: "unit-1",
        link: "https://docs.google.com/document/d/1Nnd6R0R6GgPtwh8u6cDOroQZheYwOsdG/edit?usp=sharing&ouid=112510894290966594928&rtpof=true&sd=true",
      },
      {
        author: "unit-2",
        link: "https://docs.google.com/document/d/1QwLDt2zwm2FW2JbVGy-lM9GX5p1dVrWi/edit?usp=sharing&ouid=112510894290966594928&rtpof=true&sd=true",
      },
      {
        author: "unit-3",
        link: "https://docs.google.com/document/d/1WYIyFQ4jUwQWp-YcQWsBovoJllNBKyZ7/edit?usp=sharing&ouid=112510894290966594928&rtpof=true&sd=true",
      },
      {
        author: "unit-4",
        link: "https://docs.google.com/document/d/1v5pmkiQS1l2abjaPlXy95Fq1DgsYUuc0/edit?usp=sharing&ouid=112510894290966594928&rtpof=true&sd=true",
      },
    ],
  },
  "2nd Year Semester 2": {
    "Probability Theory and Random Variables": [
      {
        author: "Peyton z",
        link: "https://drive.google.com/file/d/1xkrdYPHPAEbIegEkAeeQ6jXVtRt-TFO5/view?usp=sharing",
      },
      {
        author: "Hossein Pishro",
        link: "https://drive.google.com/file/d/1xAQayJztPidm1Qet9124PoJ3R06YQiT_/view?usp=sharing",
      },
    ],
    "Electromagnetic Filed theory and Transmission lines": [
      {
        author: "G.S.N.Raju",
        link: "https://drive.google.com/file/d/1_2OkUpppoC3oCIAejbqsrrBpwkwNW8yv/view?usp=sharing",
      },
      {
        author: "MATTHEW N. O. SADIKU",
        link: "https://drive.google.com/file/d/1P4cNVKgy5fiWz39qAf3XPKhAXGgUjFmT/view?usp=sharing",
      },
      {
        author: "U.A.BAKSHI",
        link: "https://drive.google.com/file/d/1YmIReZh5Q4opChwCjH4E9D6X4Lmh179N/view?usp=sharing",
      },
      {
        author: "R K SHVEGAONKAR",
        link: "https://drive.google.com/file/d/12b6Kd61Mm7_13xtXhF6BXjpK1ltrLmOo/view?usp=sharing",
      },
    ],
    "Linear ICs and Application": [
      {
        author: "Jaison Joy",
        link: "https://drive.google.com/file/d/1RNSpB17fVC3kOtelBOWVOgPEL4DGrgK7/view?usp=sharing",
      },
      {
        author: "D Roy Choudhury",
        link: "https://drive.google.com/file/d/1SU78pcNp6L_qpuSV9hBjxc5UAGQWtx1u/view?usp=sharing",
      },
    ],
    "Microprocessor and Microcontroller": [
      {
        author: "K M Bhurchandi, A K Ray",
        link: "https://drive.google.com/file/d/1SGT3AxJrBCe_hDOifyGIz-vh-TSWWPUV/view?usp=sharing",
      },
    ],
    "pulse and digital circuits": [
      {
        author: "A.Anand Kumar",
        link: "https://drive.google.com/file/d/1TcZXw7I-IDxlP722p6Lg91Sy1Iukz9tD/view?usp=sharing",
      },
      {
        author: "written notes unit-1",
        link: "https://drive.google.com/file/d/1cc9qhEGin5jGKLwejUwwWWAamSIbQhCt/view?usp=sharing",
      },
      {
        author: "written notes unit-2",
        link: "https://drive.google.com/file/d/1blLqOK-3Am8gIaUeJEllXdOam2_I4cqw/view?usp=sharing",
      },
      {
        author: "written notes unit-3",
        link: "https://drive.google.com/file/d/1_Q36vpfLBPQeX9uUfS6fL1neKjoR0hn0/view?usp=sharing",
      },
      {
        author: "written notes unit-4",
        link: "https://drive.google.com/file/d/1zKFkS60PWRsq-1AsdmCCzYq5G6Dub51G/view?usp=sharing",
      },
      {
        author: "written notes unit-5",
        link: "https://drive.google.com/file/d/1vFiEcdCWy_FQDENeH6BWpNBlid3sL51A/view?usp=sharing",
      },
    ],
  },
  "3rd Year Semester 1": {
    "Control Systems": [
      {
        author: "Lj Nagrath, M.Gopal",
        link: "https://drive.google.com/file/d/1QADNFqxGtgoGL5fPIuDRs8xmOlVVlFUl/view?usp=sharing",
      },
      {
        author: "B.S. Manke",
        link: "https://drive.google.com/file/d/16QPbyfbBRhkQYYk7BS39EUFkyVhGWpMV/view?usp=sharing",
      },
      {
        author: "Norman S. Nise",
        link: "https://drive.google.com/file/d/1gUpp_NGNevTJT__XZirQfFFdtpXRTr8E/view?usp=sharing",
      },
      {
        author: "Bakshi",
        link: "https://drive.google.com/file/d/1Q86OD8ULTP_1UOOlK1hK6noChHdQfK_X/view?usp=sharing",
      },
      {
        author: "Dr. Farid Golnaraghi",
        link: "https://drive.google.com/file/d/1i2JH4S3Cie0KV1Gjrzt34GV69WBP1tGm/view?usp=sharing",
      },
      {
        author: "Katsuhiko Ogata",
        link: "https://drive.google.com/file/d/1ePouomJtWNw7Bc7nIz_sdYSSoPcdui_S/view?usp=sharing",
      },
      {
        author: "Smarajit Ghosh",
        link: "https://drive.google.com/file/d/1Mlbks39KQZlxjjdxoDFC2MWbOeQFChSj/view?usp=sharing",
      },
    ],
    "Digital Communication": [
      {
        author: "Dr. Sanjay Sharma",
        link: "https://drive.google.com/file/d/1CH1APcNVzxgLeC0gkmZOFsEQv6GRKEdN/view?usp=sharing",
      },
      {
        author: "A. Bruce Carlson",
        link: "https://drive.google.com/file/d/1GrXI7IPH-39ZqKAAZvyHlb99DtXRTAUJ/view?usp=sharing",
      },
      {
        author: "P Ramakrishna Rao",
        link: "https://drive.google.com/file/d/1ACxpn7kHZ4bsju9fFu9gG_8J8D2uFIMU/view?usp=sharing",
      },
      {
        author: "B. P. Lathi, Zhi Ding",
        link: "https://drive.google.com/file/d/1vdjswqdyfZm7jkMjpfNWDCAsCmhval0n/view?usp=sharing",
      },
      {
        author: "John G. Proakis Msoud Salehi",
        link: "https://drive.google.com/file/d/1xWu1oqIY6RjWih3QmQMkF6bWXeZNkAdM/view?usp=sharing",
      },
    ],
    "Data Structures using C": [
      {
        author: "Reema Thareja",
        link: "https://drive.google.com/file/d/1IiXPIxRx8u3h6KnnZyEZ-b5mqBUj0HHP/view?usp=sharing",
      },
      {
        author: "L.Pulla Reddy",
        link: "https://drive.google.com/file/d/1Wy8hu8zTpAIV6fPUTolzljB1pqTvWUs9/view?usp=sharing",
      },
      {
        author: "written notes",
        link: "https://drive.google.com/file/d/1w6xDo3dy6hIaC5SUO6RUvvF-cxb6L0gA/view?usp=sharing",
      },
    ],
    "Internet of Things": [
      {
        author: "Raj Kamal",
        link: "https://drive.google.com/file/d/1B0SvwUYmXH6X7WcYx0n9QkClrhCIeP1b/view?usp=sharing",
      },
    ],
    "Data Science": [
      {
        author: "DAVY CIELEN ARNO, D.B.MEYSMAN MOHAMED ALI",
        link: "https://drive.google.com/file/d/1KuUxCZEdAWjjhS3TD8b2fdGFNmNfCF97/view?usp=sharing",
      },
    ],
  },
  "3rd Year Semester 2": {
    "Microwave Engineering": [
      {
        author: "Gottapu Sasi Bhushana Rao",
        link: "https://drive.google.com/file/d/11nqEae7ZaJIhDmjlHme99zgUijTVWPNu/view?usp=sharing",
      },
      {
        author: "SAMUEL Y. LIAO",
        link: "https://drive.google.com/file/d/1Qic4hcAwz-EcF5p2N6yGKRWxtArpTU0l/view?usp=sharing",
      },
      {
        author: "PETER A. RIZZI",
        link: "https://drive.google.com/file/d/1eIifz7vsg_ZXypm9RwkmZsoyiQRbteMk/view?usp=sharing",
      },
    ],
    "Digital Signal Processing": [
      {
        author: "A. Anand Kumar",
        link: "https://drive.google.com/file/d/1ueh1Xbvb2pReXtWmFg6hJQZHxMfFl2EG/view?usp=sharing",
      },
      {
        author: "John G. Proakis Dimitris K. Manolakis",
        link: "https://drive.google.com/file/d/1NVe3rSlmvpQVSloScsGleOn76dmD0aMJ/view?usp=sharing",
      },
      {
        author: "Thomas Holton",
        link: "https://drive.google.com/file/d/1MxyH14oTS0MvFEjzyNKhFjO23cHJklvS/view?usp=sharing",
      },
      {
        author: "John G.Poakis, G.Manolakis",
        link: "https://drive.google.com/file/d/1Vvb-JoPAuaQBogCxbKNo8RQYhObNOHeE/view?usp=sharing",
      },
      {
        author: "Alan V. Oppenheim, Ronald W. Schafer",
        link: "https://drive.google.com/file/d/1jt4Y4sV6Os9UoqIQMdRR-9coc5nKDfmq/view?usp=sharing",
      },
      {
        author: "Sanjit K.Mitra",
        link: "https://drive.google.com/file/d/1eWTDR6NQmyPDpXcXTxMAKcgU7RuKX0-5/view?usp=sharing",
      },
      {
        author: "Alan V. Oppenheim, Ronald W. Schafer ",
        link: "https://drive.google.com/file/d/1ygahUeF1po0wzLOAup-hSL8a_Q0fZwgH/view?usp=sharing",
      },
      {
        author: "David Smith",
        link: "https://drive.google.com/file/d/1AKSzgeav15V1fmD5Pt6QCogdSuIsjywy/view?usp=sharing",
      },
      {
        author: "Donald S.Reay",
        link: "https://drive.google.com/file/d/1f3SelHPGnR1N6VzwfEq54eKJrOyImake/view?usp=sharing",
      },
      {
        author: "Alan V. Oppenheim, Ronald W. Schafer",
        link: "https://drive.google.com/file/d/1DuMlj-lkQuUrcZ9g9Yh0EGxf5ku5hpnN/view?usp=sharing",
      },
      {
        author: "Steven W. Smith",
        link: "https://drive.google.com/file/d/1Tu5hj8y_JBhoQ8MEind1xdBHeDut3G-0/view?usp=sharing",
      },
      {
        author: "Bhagawandas P. Lathi and Roger Green",
        link: "https://drive.google.com/file/d/1SP0ljwuJc0BfhvHrXUDVTzUuAdpoIxv1/view?usp=sharing",
      },
    ],
    "Anteena and wave propogation": [
      {
        author: "G.S.N.Raju",
        link: "https://drive.google.com/file/d/13VIWfjIS2ySE-CG8YSoSvlaLczWPZccQ/view?usp=sharing",
      },
      {
        author: " A. Balanis",
        link: "https://drive.google.com/file/d/1xu2V-vdS6eO12jpOI71UOIvlwNEUryXr/view?usp=sharing",
      },
    ],
    "Computer Networks": [
      {
        author: "by Behrouz A. Forouzan",
        link: "https://drive.google.com/file/d/1uim738OIKSqnPwr1lz1PIV1jrHC-h0Is/view?usp=sharing",
      },
      {
        author: "ANDREW S. TANENBAUM, NICK FEAMSTER, DAVID WETHERALL",
        link: "https://drive.google.com/file/d/1XIr8EQOsVDyRmsDSBUWOQEIjjdLlWL8W/view?usp=sharing",
      },
    ],
  },
  "Some more important books ECE": {
    VLSI: [
      {
        author: "CARVER MEAD, LYNN CONWAY",
        link: "https://drive.google.com/file/d/1wZ76EDdbnQTAmGSaUy0BkzprS-pxlXxM/view?usp=sharing",
      },
      {
        author: "Neil H.E.Weste,David Money Harris",
        link: "https://drive.google.com/file/d/1IbIA6knR79H72iUNHSA7-nXSOKMtUbQT/view?usp=sharing",
      },
      {
        author: "Sanjay Churiwala",
        link: "https://drive.google.com/file/d/16sSrUDru3hwMuZBVYhcNl0jAbloZBFFV/view?usp=sharing",
      },
      {
        author: "S.M.SZE",
        link: "https://drive.google.com/file/d/12CAX2GolWFNv_5UxvfjfIYywWZxsC5ns/view?usp=sharing",
      },
    ],
    Radar: [
      {
        author: "Merrill I. Skolnik",
        link: "https://drive.google.com/file/d/1vWFfdjEtQzGJzXU_vgaHPtqTkii_Hke3/view?usp=sharing",
      },
    ],
    "Verilog and FPGA": [
      {
        author: "Samir Palnitkar",
        link: "https://drive.google.com/file/d/1ViFzxaiGD9xw5njtaYRFjhFJulsbu1kl/view?usp=sharing",
      },
      {
        author: "Simon Monk",
        link: "https://drive.google.com/file/d/1QkgBcTTJQopdLocJSHpJAPdlrx4aTydf/view?usp=sharing",
      },
    ],
    "Embedded systems": [
      {
        author: "Shibu Kizhakke Vallathai",
        link: "https://drive.google.com/file/d/1XURYu9iiR7u-tX7s9pI6XD2NFFCB0k0C/view?usp=sharing",
      },
    ],
    "Cellular Communication": [
      {
        author: "Theodore S.Rappaport",
        link: "https://drive.google.com/file/d/1jkTeVLLgVM4DTdytMCgGp6xzGc1tE_lh/view?usp=sharing",
      },
      {
        author: "Gottapu Sasibhushana Rao",
        link: "https://drive.google.com/file/d/1qoMKEwj8ND77TTPxpEZgGugtyoS1xubB/view?usp=sharing",
      },
      {
        author: "William C.Y.Lee",
        link: "https://drive.google.com/file/d/1CERX6f7YbQ3-r_Zsv8iLjOWlLj1ku3uF/view?usp=sharing",
      },
      {
        author: "Theodore S.Rappaport",
        link: "https://drive.google.com/file/d/1jTm4Q64K3SBfkFDRXBXK0x3PgTg4AWM3/view?usp=sharing",
      },
    ],
    "Information Theory and Coding": [
      {
        author: "Ranjan Bose",
        link: "https://drive.google.com/file/d/1A0YXxTe9MTLGeZWfvDNBvwyiEbVWBACG/view?usp=sharing",
      },
      {
        author: "Richard W.Hamming",
        link: "https://drive.google.com/file/d/1rbpsCESvnqgF263UztqSlQJ4WbEFPNiW/view?usp=sharing",
      },
    ],
    Robotics: [
      {
        author: "Saeed B. Niku",
        link: "https://drive.google.com/file/d/1Hwpy_6U17nfgvTxbOyzN5AC31dnN9MYG/view?usp=sharing",
      },
    ],
    "Analog Electronics": [
      {
        author: "Ramkant A.Gayakwad",
        link: "https://drive.google.com/file/d/1kOy39-euePKRFJuwGUuTGjjc267Distt/view?usp=sharing",
      },
      {
        author: "Adel S. Sedra, Kenneth C. Smith",
        link: "https://drive.google.com/file/d/1WjKw5AopZrT9OhQzrUCI4kwqvGyHq6kL/view?usp=sharing",
      },
      {
        author: "Behzad Razavi",
        link: "https://drive.google.com/file/d/12WcM_oQgnG3Ti4V-8ipPpHQxRiT5peG2/view?usp=sharing",
      },
      {
        author: "Hank Zumbahlen",
        link: "https://drive.google.com/file/d/1_k56p24fXnTx2tmjBgkXjRBObXDi6mzt/view?usp=sharing",
      },
      {
        author: "D.Roy Choudary",
        link: "https://drive.google.com/file/d/1jnXYYAMbgLxQaRWeddwZYxadOzP-10BB/view?usp=sharing",
      },
      {
        author: "Walter G. Jung",
        link: "https://drive.google.com/file/d/10eu17WZ0_Yn9PKgBOQU9BoYcAOCDxXoM/view?usp=sharing",
      },
      {
        author: "Jaison Joy",
        link: "https://drive.google.com/file/d/1ZWIVKB-ky2ZHgqOeaJoiw4nNvSxPAK3x/view?usp=sharing",
      },
      {
        author: "James M. Fiore",
        link: "https://drive.google.com/file/d/1OGU9ezCh76NS_hn78LqtTMWopustTdIa/view?usp=sharing",
      },
      {
        author: "Behzad Razavi",
        link: "https://drive.google.com/file/d/1x-ArXleH0wO-oANSh4fJVXkWhoNFPzBD/view?usp=sharing",
      },
    ],
    "Antenna Theory": [
      {
        author: "Edward C.Jordan",
        link: "https://drive.google.com/file/d/1FbwHyr-8ffRhYveN_Tv3VrX9xtqUMD3U/view?usp=sharing",
      },
      {
        author: "Yi Huang, Kevin Boyle",
        link: "https://drive.google.com/file/d/1wmgF6VhGmD5qLFxT93pj8m1dfv_fJUgZ/view?usp=sharing",
      },
      {
        author: "H. C. WRIGHT",
        link: "https://drive.google.com/file/d/1fyTFC6yTuDmjMOdnV3QHEvu63NrouFRw/view?usp=sharing",
      },
      {
        author: "Constantine A. Balanis",
        link: "https://drive.google.com/file/d/12WAbTr2y-gxnyXtZstEpKA8UB_wHhUJf/view?usp=sharing",
      },
      {
        author: "Harish, A.R.; Sachidananda, M.",
        link: "https://drive.google.com/file/d/1igjSul-2zUJK_1lasOZTSmDlXaSxAGHr/view?usp=sharing",
      },
      {
        author: "John D.Kraus",
        link: "https://drive.google.com/file/d/1VxwzsGfcBp8a2EwpJ5WobVvrpboTCTgM/view?usp=sharing",
      },
      {
        author: "W.W.Harman",
        link: "https://drive.google.com/file/d/18fVjd0nCIH4vmHVmG1Td5_D4xfvQ4YMO/view?usp=sharing",
      },
      {
        author: "R.L.Yadava",
        link: "https://drive.google.com/file/d/1jPyT-axCBYN0RvorwYHRQ_0Ir0wCAjdZ/view?usp=sharing",
      },
      {
        author: "G.S.N. Raju",
        link: "https://drive.google.com/file/d/1MNh-LWpzZnrb0T8DZbaSyjBvnGsdXab1/view?usp=sharing",
      },
      {
        author: "Warren L. Stutzman and Gary A. Thiele",
        link: "https://drive.google.com/file/d/1I-Hs3ZsE5laClCG6vQyrffdVeDt3mUYo/view?usp=sharing",
      },
    ],
    "Neutral Networks": [
      {
        author: "Charu C. Aggarwal",
        link: "https://drive.google.com/file/d/1hEHY6rsa6l2cufFAB0HfxOBCdAwf9iSQ/view?usp=sharing",
      },
      {
        author:
          "Ivan Nunes da Silva, Danilo Hernane Spatti, Rogerio Andrade Flauzino",
        link: "https://drive.google.com/file/d/1LX4xFa1JRzkqhWjir4o5Grm8YG40bbVY/view?usp=sharing",
      },
      {
        author: "Simon Haykin",
        link: "https://drive.google.com/file/d/1_Y_nCltvK5Tgmqd6A2DpuTgrP49_FfjN/view?usp=sharing",
      },
      {
        author: "Yoshua Bengio, Aaron Courville",
        link: "https://drive.google.com/file/d/1i814AWOsGh1E7mvt1Tr6z8pChPyVBdZX/view?usp=sharing",
      },
      {
        author: "Harrison Kinsley & Daniel Kukieła",
        link: "https://drive.google.com/file/d/1hbqGuxk4vgDG8Vm66DK5HD9HeexphieL/view?usp=sharing",
      },
    ],
  },
  "Aptitude for gate": {
    "Quantitative Aptitude": [
      {
        author: "R.S.Aggarwal",
        link: "https://drive.google.com/file/d/1_zRQeiSRBCzbnXjYRBRMR5-7ZetSP_xc/view?usp=sharing",
      },
      {
        author: "R.S.Aggarwal",
        link: "https://drive.google.com/file/d/1NvvIOAoIrfv4qJHaXDQDH_B79m093BS3/view?usp=sharing",
      },
      {
        author: "Dr. R.S. AGGARWAL",
        link: "https://drive.google.com/file/d/1ru84VX_BNdJJjwRS4sbaAgwafxbqbTBV/view?usp=sharing",
      },
    ],
    "spatial Aptitude": [
      {
        author: "spatial aptitude",
        link: "https://drive.google.com/file/d/17pausxOHQq9aLhVaoXlyBqTw4Svd8mgx/view?usp=sharing",
      },
      {
        author: "spatial aptitude",
        link: "https://drive.google.com/file/d/1PizHBY2-eOtmM36tDxDl0bKfPIWwN6pr/view?usp=sharing",
      },
    ],
    "Analytical Reasoning": [
      {
        author: "1.",
        link: "https://drive.google.com/file/d/1Ju453Sh7B7atVq1n8T7oFbxTQTVRIVFV/view?usp=sharing",
      },
      {
        author: "2.",
        link: "https://drive.google.com/file/d/1J_Jpx6RJRhSlLvnR0DpSX_8repeFIDwB/view?usp=sharing",
      },
      {
        author: "3.",
        link: "https://drive.google.com/file/d/1rsRVQroEHgplbKw4FdpxV7qeJdUq4EUE/view?usp=sharing",
      },
      {
        author: "4.",
        link: "https://drive.google.com/file/d/1KlZgU_7KJq0I8kxT2s-fD1zDhHBfFFce/view?usp=sharing",
      },
      {
        author: "5.",
        link: "https://drive.google.com/file/d/1OzLvq2mG2IgbRNde5ff-IkA-CJS5_mF1/view?usp=sharing",
      },
      {
        author: "6.",
        link: "https://drive.google.com/file/d/1UdZulHUvOjQkhROyXsO4-Irza3Zc5nSh/view?usp=sharing",
      },
    ],
    "Quantitative Aptitude for practice": [
      {
        author: "1",
        link: "https://drive.google.com/file/d/1kfpKtqrWHu0V2VOcyv5rXbbej5SDETm_/view?usp=sharing",
      },
      {
        author: "2",
        link: "https://drive.google.com/file/d/1csO6DgEwxR-k_JFXtLbe5Sa6j23Y4TK8/view?usp=sharing",
      },
      {
        author: "3",
        link: "https://drive.google.com/file/d/1YFrfqTn6HFAS91G93cfAX8sNdxsljvXB/view?usp=sharing",
      },
      {
        author: "4",
        link: "https://drive.google.com/file/d/1LANwWno476OduuaxmKvHrXDmiMrUl5aH/view?usp=sharing",
      },
      {
        author: "5",
        link: "https://drive.google.com/file/d/1CYUPAGME2Ukod085ezvrSN_mm1RaxKHL/view?usp=sharing",
      },
      {
        author: "6",
        link: "https://drive.google.com/file/d/1JW4XZ9tcrL9fwCyrihzR9P06zmLYUvZE/view?usp=sharing",
      },

      {
        author: "7",
        link: "https://drive.google.com/file/d/1C_04Uj3bhtL_Mmuo9p3dKGuDcrVhV9b-/view?usp=sharing",
      },
      {
        author: "8",
        link: "https://drive.google.com/file/d/1sSGK5sSBvFOyKViRTphDxaNvz8kiCsUy/view?usp=sharing",
      },
      {
        author: "9",
        link: "https://drive.google.com/file/d/1DKc9Gax-4lz__jqoCEl9ZUEMyJH3ofy2/view?usp=sharing",
      },
      {
        author: "10",
        link: "https://drive.google.com/file/d/1T51bKVSabGF9pNAZlvf9uGVHp2-QNgxf/view?usp=sharing",
      },
      {
        author: "11",
        link: "https://drive.google.com/file/d/19CqHMjjwsWHQHFVFolXldaoDcMWnKNeC/view?usp=sharing",
      },
      {
        author: "12",
        link: "https://drive.google.com/file/d/1sQnORnWZ3WxLjXGhPmc6dWeRNFGCpHeN/view?usp=sharing",
      },
      {
        author: "13",
        link: "https://drive.google.com/file/d/1COqefpAThXfoz0RYP1OKM0S4wtx4fmJt/view?usp=sharing",
      },
    ],
    "Quantitative aptitude pyqs": [
      {
        author: "Calendars & Clocks",
        link: "https://drive.google.com/file/d/1eUIiZVuE2QVFJgAUHB0eHRo5FaK4L4hH/view?usp=sharing",
      },
      {
        author: "Averages & Percentages",
        link: "https://drive.google.com/file/d/17ZH2g5rx4I1IGlKmuETnuFx0pc7q3qzY/view?usp=sharing",
      },
      {
        author: "Profit & Loss",
        link: "https://drive.google.com/file/d/1TFkOApMEu1VvSlc5ss5hyGXQxu7D09oF/view?usp=sharing",
      },
      {
        author: "Mixtures & Alligations",
        link: "https://drive.google.com/file/d/1HKVvDlLkQMfIyJzXnqlhkJGNlRtaH0aR/view?usp=sharing",
      },
      {
        author: "Number System",
        link: "https://drive.google.com/file/d/1X-I9HGnS498FpsbhOqqX3j3z-nZ1yUTk/view?usp=sharing",
      },
      {
        author: "Time & Work",
        link: "https://drive.google.com/file/d/1IMynDk1CgAqitH8mXTnQ8mkIrq9dlUAP/view?usp=sharing",
      },
      {
        author: "Pipes & Cistern",
        link: "https://drive.google.com/file/d/1udF7eI7L2ZckK1V4MTvWIvDHPY0EdZEa/view?usp=sharing",
      },
      {
        author: "Time and Distance",
        link: "https://drive.google.com/file/d/1hQDc4RnEy4l09nMqKjwSvic99BbNrvvU/view?usp=sharing",
      },
      {
        author: "Trains, Boats & Races",
        link: "https://drive.google.com/file/d/1N5zG7XDjCCPW0eepsGsAeAEd4yavr5wl/view?usp=sharing",
      },
      {
        author: "Data Interpretation",
        link: "https://drive.google.com/file/d/1dbbYaLfHUOSRH9scmO-L__Z5aWznzHb1/view?usp=sharing",
      },
    ],
    "Solutions for Quantitative Aptitude": [
      {
        author: "Calendars & Clocks",
        link: "https://drive.google.com/file/d/1b7EI86gIJqJdodZzwJRfgp40gVdrUMfU/view?usp=sharing",
      },
      {
        author: "Averages & Percentages",
        link: "https://drive.google.com/file/d/1HvMoVM1cmGELxzXv0w9c1qM32GVTxrau/view?usp=sharing",
      },
      {
        author: "Profit & Loss",
        link: "https://drive.google.com/file/d/1AOjLcaPRmnlQ_N0tYvXGENAzUvYeIf1E/view?usp=sharing",
      },
      {
        author: "Mixtures & Alligations",
        link: "https://drive.google.com/file/d/1u4n_xN7hUIfgJ-VNMMmpd7v36KbdIoOd/view?usp=sharing",
      },
      {
        author: "Number System",
        link: "https://drive.google.com/file/d/1PYKT6lGSOCP21x19JL2ppaSEZFjY9Vuz/view?usp=sharing",
      },
      {
        author: "Time & Work",
        link: "https://drive.google.com/file/d/14p1zWRwyklwGGCLEB7EfzoySBlaLP98U/view?usp=sharing",
      },
      {
        author: "Pipes & Cistern",
        link: "https://drive.google.com/file/d/1SNp_PGXbpRWQHo4HfW8fHnk5EKCKGey7/view?usp=sharing",
      },
      {
        author: "Time and Distance",
        link: "https://drive.google.com/file/d/14uqrNR8ZYXmafjO0KuE1Y9TRIKJlWN4d/view?usp=sharing",
      },
      {
        author: "Trains, Boats & Races",
        link: "https://drive.google.com/file/d/1ElWK1z94mcX_mrIlf2lP36mb7yeBMXPs/view?usp=sharing",
      },
      {
        author: "Data Interpretation",
        link: "https://drive.google.com/file/d/1gKvW09EYWFdXCa-RY9ORBuOg4Wbj6bvM/view?usp=sharing",
      },
    ],
    "Analytical Reasoning pyqs": [
      {
        author: "Blood Relations",
        link: "https://drive.google.com/file/d/1ENfpH96yPmkzubCAohJbmiZ6f5-OiYoG/view?usp=sharing",
      },
      {
        author: "Coding, Decoding & Directions",
        link: "https://drive.google.com/file/d/1wwBm1NAm92eN7hxLU6y_CvuMC4mmTrtK/view?usp=sharing",
      },
      {
        author: "Arrangements & Ranking",
        link: "https://drive.google.com/file/d/1zKd4O0ZSTnV5LU7fkDwnYNKcMUCNKRGi/view?usp=sharing",
      },
      {
        author: "Problem Solving",
        link: "https://drive.google.com/file/d/1XyonTYT1xo7WMdmUgqv-7JNSV9FaqmhL/view?usp=sharing",
      },
      {
        author: "Cubes & Dices",
        link: "https://drive.google.com/file/d/1lqkswqTkcsuDS0pQkGuVW6ICP-PZ1_fw/view?usp=sharing",
      },
      {
        author: "Venn Diagrams",
        link: "https://drive.google.com/file/d/1ILCymK9dvco6krQghuYR3NVnCtniyTs8/view?usp=sharing",
      },
    ],
    "Solutins for Analytical Reasoning": [
      {
        author: "Blood Relations",
        link: "https://drive.google.com/file/d/1vQu2bNQD3UgEbHwZj9KA0Na3Sp8VlIkh/view?usp=sharing",
      },
      {
        author: "Coding, Decoding & Directions",
        link: "https://drive.google.com/file/d/1-JBnDpyoo1DNVSnWfovS0Vtsizz5sf1H/view?usp=sharing",
      },
      {
        author: "Arrangements & Ranking",
        link: "https://drive.google.com/file/d/1wEF0Wu18LZ0LkF7AbsFSVk5u7XH6xsH-/view?usp=sharing",
      },
      {
        author: "Problem Solving",
        link: "https://drive.google.com/file/d/1_47qIuIVCI8YV3IGseajKXVPPWzhmzCk/view?usp=sharing",
      },
      {
        author: "Cubes & Dices",
        link: "https://drive.google.com/file/d/1vl8enduYmvnGtsA7eXeTABk2BKdQVfm0/view?usp=sharing",
      },
      {
        author: "Venn Diagrams",
        link: "https://drive.google.com/file/d/12Kyy7H7fXuOy1P74rKU8JdCxyUsz-QAI/view?usp=sharing",
      },
    ],
    "Spatial Aptitude pyqs": [
      {
        author: "Formation of Images",
        link: "https://drive.google.com/file/d/16tJv8yTTdATRBK29tMu3rXs8moqcHdJl/view?usp=sharing",
      },
      {
        author: "Paper folding & Cutting",
        link: "https://drive.google.com/file/d/1gl_2Gnd7iG7zIVpdD7cyhkO_yyG1G7Uk/view?usp=sharing",
      },
    ],
    "Solutions for Spatial Aptitude": [
      {
        author: "Formation of Images",
        link: "https://drive.google.com/file/d/1PUPy4kIZpt_Z2aNhqp2LCVeE5-0VdWmI/view?usp=sharing",
      },
      {
        author: "Paper folding & Cutting",
        link: "https://drive.google.com/file/d/1lXdr9q6ZwlSoGDYG0xDJ9p3IyL6Pw1dL/view?usp=sharing",
      },
    ],
  },
  "Analog for gate": {
    "Basic Introduction of Electronics": [
      {
        author: "Analog Electronics",
        link: "https://drive.google.com/file/d/1pPaITokyO1FiGMZGoaTjqSj9P947EqqO/view?usp=sharing",
      },
      {
        author: "Electronics device circuits",
        link: "https://drive.google.com/file/d/1j1bodkkLNoPAFKdHugm10OzZ0YyM6OTO/view?usp=sharing",
      },
      {
        author: "Analog Electronics",
        link: "https://drive.google.com/file/d/1MjYP4DoR7tsImoAobLuIXusvqHFKyWpZ/view?usp=sharing",
      },
      {
        author: "Analog Electronics",
        link: "https://drive.google.com/file/d/1O9IlwrNxEn4Zd3co8viuw8J5y4DPkJyv/view?usp=sharing",
      },
    ],
    "BJT Circuits": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1kLv92hKx1Qjd3D979YVLiBQINIwqKO5q/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1gs6B4vYVwbKFbXwxUWzQZ3Z6prnRvp6N/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1gueQvijrbTgEzooSbYcVq821GBaT1zXF/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1pQIWDw5QsXlDAfXNkkPz3ukG9rHXEjLe/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1ctHwpV4Bu59SvMUsuLXb0NjZnrh_YSw0/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1M932oOlJ5d5yLVQEouFsSPTGucNKsfvA/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1gnarnxoYll4nzR1_6n0uofvsJPjWVpBK/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1H45mz4POL2BZFO72Mr380-F6eAFgUn6o/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1Ss8J39HpvbqHjKVuhtvlgoXWmCLV0CHL/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1Ss8J39HpvbqHjKVuhtvlgoXWmCLV0CHL/view?usp=sharing",
      },
      {
        author: "lecture 11",
        link: "https://drive.google.com/file/d/1VWrR_gYVGcYCqHWNlqsrwDJZTTWLCNSz/view?usp=sharing",
      },
      {
        author: "lecture 12",
        link: "https://drive.google.com/file/d/1eeV6OzSGjsRbHYXydxN4H-k7A2nchm0Z/view?usp=sharing",
      },
      {
        author: "lecture 13",
        link: "https://drive.google.com/file/d/1YcQATc2KXYz4iiCGU__pIbYxN0GDVmnV/view?usp=sharing",
      },
      {
        author: "lecture 14",
        link: "https://drive.google.com/file/d/1AbxdmQ-OW1hEX0xZgEpcJdrO23r8cLmM/view?usp=sharing",
      },
      {
        author: "lecture 15",
        link: "https://drive.google.com/file/d/14uXIiN8qv7p4yBjLacTtEG1x_CUn5oJe/view?usp=sharing",
      },
      {
        author: "lecture 16",
        link: "https://drive.google.com/file/d/14uXIiN8qv7p4yBjLacTtEG1x_CUn5oJe/view?usp=sharing",
      },
      {
        author: "lecture 17",
        link: "https://drive.google.com/file/d/17cZaWCV2bGlNMeTP9FJ8YUptDlJZekF9/view?usp=sharing",
      },
      {
        author: "lecture 18",
        link: "https://drive.google.com/file/d/17S69NU8dxzY_lQ8RL9QJrqmkY4qtuOv6/view?usp=sharing",
      },
    ],
    "Differenctial Amplifiers and Frequency Anlaysis of Amplifier ": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1B_jKLHoe5acBnH_1hHQPVvuxszSPOzDi/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1gTu62GmVaiasL5cv5XjTEmSOPd2pNIte/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1zViKiIJWxpkSkIJrRu_3OtWhKzm23RHd/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1IxCIeKLeCPSc8MAKmrqYYdKyaT1RCV34/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1nGzkbIdP1SoNIaj5_if0INjReKm2EX_I/view?usp=sharing",
      },
    
         {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1z8Og_zlxvb5tk6_f_nf_vRNc0IPW2FvN/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1YaTMyRrhnHjwwKiqLIKLrKGbGqbi6-v9/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1Jse6wGiy_DUpxw3hT7qJIPBTXkTKLZDJ/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1N5jf81zvq6h5aLgUlbIknYqEC3FjfzpT/view?usp=sharing",
      },
      
    ],
    "Diode Circuits": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1vTmCC4B8AVrOmJxFYJ5kSa-TrFlAXi2K/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1hjey6P3m-47jcjPr8mlOpaKQefMu7_kz/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1DRz_dDO-zU_IRAKV9CJm5lVH-7bu9xu2/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/11grnpdg0lH_9dqIKUx0lidNHJSGtFru2/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1yVwmK3VYm_5oqorQ5woYoQMeWLmPk94g/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/156tNZOIouPZQVuLE2wBkLRvF9Gd9d22c/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1f_VkB2NC_AWNI8k3mlJ1QhjIIryIpX_v/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1hZAr1NpAYGArXrrH55jG6_SbPBoIHZpR/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1-4PW4ncYU9Bj47nZ_azTNOXd1x6Y6um4/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1g2UkpnL4ve3wu5tE9weksvF8XdvT-aAp/view?usp=sharing",
      },
      {
        author: "lecture 11",
        link: "https://drive.google.com/file/d/1l8BXh8W1la44ManMHoyJbRieCwgSyqwZ/view?usp=sharing",
      },
      {
        author: "lecture 12",
        link: "https://drive.google.com/file/d/1609aX7xUXXTf8N73u_2rVsFQK243OUFr/view?usp=sharing",
      },
      {
        author: "lecture 13",
        link: "https://drive.google.com/file/d/1wPsFUbz1eoD9TWeHIbVhCwOJ6YGkwWDu/view?usp=sharing",
      },
      {
        author: "lecture 14",
        link: "https://drive.google.com/file/d/1UpCeXcJxa9BTkzTkAu_UQ8S_h90z8Is7/view?usp=sharing",
      },
      {
        author: "lecture 15",
        link: "https://drive.google.com/file/d/1ee6HA2svOV-i4KMmvS-x59frz_hLWjHQ/view?usp=sharing",
      },
      {
        author: "lecture 16",
        link: "https://drive.google.com/file/d/1_Lauu8hOGlwcXHyzdopF0Pr7lKimYOI0/view?usp=sharing",
      },
      {
        author: "lecture 17",
        link: "https://drive.google.com/file/d/1B7GXY4ED5FeFjPsH03VE8Wdqqibds9WB/view?usp=sharing",
      },
      {
        author: "lecture 18",
        link: "https://drive.google.com/file/d/1djUfhIfyTmHjTQ0PhlSKOU0Ht5rHt9HV/view?usp=sharing",
      },
    ],
    "feedback amplifiers and Oscillators": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/15liRANWo4aOKfGODA83osEAQi8wk6q_H/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/12ZYMhxABjJ6KXqOFU6BHVtCQQ3lS7pri/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1qXqsbYulMD4u0YP9gwWKpTuSPSh37LgI/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1FrkXgd6ipIYoK6uuHS4ArJFpB_lAnQGa/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1AiPdTp5gMmVaMHM-SF6V8MN4RNuAJkdB/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1Hai2nnVjuz4g2jycclBUzt0YLxl9Ulae/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1_OSKeCbGQUGrZnDawxwdcS72-11k4NCy/view?usp=sharing",
      },
    ],
    MOSFET: [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/11CABrsySCxmRmhq7oiBZY79AE585T1R0/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1udwLsPMNoHTQtEEKRqBC92oDjaSUnakN/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/116N3xFbpqcMEVsqgHSltVsR_dcL4vqES/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1TaqyOcCvaVaEMThW4ghsWVX2e7KqrAYC/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1YUPdPd4Vve8jl-7XSOPFrHQBhIaYu3tc/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1CAHaK_5nHWkU0T7LRd5RTbHUB0pa9HAZ/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1IjZ-5PClgou_V28gTbPTKn4DmemPUbaK/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1dlYVVPy1brU85Z6kCNOE_NVicHbF-5mn/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1XSfQgTkwDQdr8yiR1nTMiHSDl8yhZF1E/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1lOtLftBkTv0meGFA5oz-2xIvIR5EtClB/view?usp=sharing",
      },
      {
        author: "lecture 11",
        link: "https://drive.google.com/file/d/1TsSWBXd5nOpqYUs9xgcUv_CK9NMVMePG/view?usp=sharing",
      },
      {
        author: "lecture 12",
        link: "https://drive.google.com/file/d/1OULJnigq2GccaSjze5I0Wmk5cIPw7jT_/view?usp=sharing",
      },
    ],
    "Op-amp": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1e5FTH_qM8EWX8uRzWtmCk4Pjibgg_RpN/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1ahHzk0p3unjzJpRmk7baL-lPEVrw8OTn/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1oClp9TeQoYoWSJrbyTKH_LcqXSxtsllP/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1E4CbQVtGzRt0lH7fuDNlPiKNi-lk2gwc/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1lKC1eW6uPc4VP5imuOSunfNgPP7GUukY/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1g4CkwBm4-38Qrbi-vqlwZ0gycccq7veo/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1-lYGyJgNyMraX7xARw0BZ1_PZOVMeaDU/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/17ELtvgsqktPz1702JmOiOuZEMnDFqOQ6/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1VFSagM6yL70DljRWgjyGfn5sS186X4xn/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1UqoEfBvxD1sSvm3OGxz3U-wVE4Hs6uzu/view?usp=sharing",
      },
      {
        author: "lecture 11",
        link: "https://drive.google.com/file/d/1mGSec28rohP6rBE0sHC-VlN1To87hf5o/view?usp=sharing",
      },
      {
        author: "lecture 12",
        link: "https://drive.google.com/file/d/1Es9tGsSTvtDqJGjwkdVftE4DTuAvirfo/view?usp=sharing",
      },
      {
        author: "lecture 13",
        link: "https://drive.google.com/file/d/1TrfqoHaO-K_d660PCoadivvvJg05ijna/view?usp=sharing",
      },
    ],
    "practice Bits": [
      {
        author: "BJT Circuits",
        link: "https://drive.google.com/file/d/1DEfARs1wXYqbDXkUmj2fmUV2MyGzb5_2/view?usp=sharing",
      },
      {
        author: "BJT Circuits answers",
        link: "https://drive.google.com/file/d/1GYrNvzoBYI2zYq8EccvHUkPacB9kPVZ1/view?usp=sharing",
      },
      {
        author: "Diode Circuits",
        link: "https://drive.google.com/file/d/1TdkibJRwee711I2bO0uyfXnWzGiGAKCc/view?usp=sharing",
      },
      {
        author: "Diode Circuits answers",
        link: "https://drive.google.com/file/d/1Qsovi2OYNPYvTVtBsWTvo0SjwzRDz0si/view?usp=sharing",
      },
      {
        author: "Diode circuits 2",
        link: "https://drive.google.com/file/d/1VWNuqm7pJ2bNjmtaosfutFO66m7OKNQT/view?usp=sharing",
      },
      {
        author: "Diode Circuits 2 answers",
        link: "https://drive.google.com/file/d/1VVvuzQM4u5nz95i6-H_xcGQ6Y9Ljq_Ec/view?usp=sharing",
      },

      {
        author: "Feedback Amplifier and Oscillators",
        link: "https://drive.google.com/file/d/1OzmF2pI-c6RvdImgXgiTJtjfI4A_fALy/view?usp=sharing",
      },
      {
        author: "Feedback Amplifier and Oscillators answers",
        link: "https://drive.google.com/file/d/1-LVQ63WQpmsOY1jvKQf4ZiIyT7uyV8EK/view?usp=sharing",
      },
      {
        author: "MOSFET",
        link: "https://drive.google.com/file/d/1G2wRUfYfSbpR-U2pSVevJDPUqgWeEuUz/view?usp=sharing",
      },
      {
        author: "MOSFET answers",
        link: "https://drive.google.com/file/d/1LL589VEr_ctb9DkiJBYC89BLqspzHaxH/view?usp=sharing",
      },
      {
        author: "OP-AMP",
        link: "https://drive.google.com/file/d/1KYNDMg_rPpt58BYTJ6bmvqOecxIRGWiw/view?usp=sharing",
      },
      {
        author: "OP-AMP answers",
        link: "https://drive.google.com/file/d/1Li-JBMrvnSuz_7s1HCLK4aSfCJPmC6Gn/view?usp=sharing",
      },
    ],
  },
  "Communication for gate": {
    "Analog communications AM and FM": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1IDEq1KvXBmvWcXW_5OrEvhKVfI4E7Ndx/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1Xc8i3jLEbKmB-_qnYmpdypVGc8Ks8ray/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1xSwgpWV7bFdC1TuPu_T9p1GcbKoqutLf/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1ZJqCgjhWz-_joNIUS3nvHCHL2aeOdmxH/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1v8JhnakJkOPcUR3GhD_CS_y6mMANVt7U/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1CPHjYOGKD6gCQoRBsiKMEc0hi8jKKDsu/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1-Ic1NMMNXnYl-ak4YYG3mDq5bx1vRoyX/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1jWciYOn4CP5S1q0UhaY6CyCvvif5vn86/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1Ptz0m_sD3aGC9c2dikymrWQStVNJYXpQ/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1Ypa_ZBZRGq9pS1qRlOKHRDPvZWcaFmNx/view?usp=sharing",
      },
      {
        author: "lecture 11",
        link: "https://drive.google.com/file/d/11WRE99Yl8ZGkaMnFOLPGpbeMX1ZVjheW/view?usp=sharing",
      },
      {
        author: "lecture 12",
        link: "https://drive.google.com/file/d/1EKlzHLumwpmF0RjezXP2dn6mMDaBBah7/view?usp=sharing",
      },
      {
        author: "lecture 13",
        link: "https://drive.google.com/file/d/157y4zc7ZdFl7tPl45D5QUl8XDZ7ds4ev/view?usp=sharing",
      },
    ],
    "Analog communication AM and FM 2": [
      {
        author: "lecture 14",
        link: "https://drive.google.com/file/d/1SqA2JuTg6u4sUHWVfnLUPJm72a-49tfm/view?usp=sharing",
      },
      {
        author: "lecture 15",
        link: "https://drive.google.com/file/d/1zVA4Hw0y_hS5VNurOB1AqYUQNz1bdKqe/view?usp=sharing",
      },
      {
        author: "lecture 16",
        link: "https://drive.google.com/file/d/1bBwzb3tEJK7cQmWYohIW9ry5j0DM0LZb/view?usp=sharing",
      },
      {
        author: "lecture 17",
        link: "https://drive.google.com/file/d/1oXG-n7X1O0nZL3TC2ATzOrzTRXHf4cQK/view?usp=sharing",
      },
      {
        author: "lecture 18",
        link: "https://drive.google.com/file/d/1zWHHqHo9vQA5LANNf9f3YyvspLPeslMJ/view?usp=sharing",
      },
      {
        author: "lecture 19",
        link: "https://drive.google.com/file/d/1udzREbvQrIi_b4hrTpFehhOO6bzgMWjR/view?usp=sharing",
      },
      {
        author: "lecture 20",
        link: "https://drive.google.com/file/d/1K5MsWp3_iTX6jVNcJESOfWNfuVl0VSvF/view?usp=sharing",
      },
      {
        author: "lecture 21",
        link: "https://drive.google.com/file/d/1iFTM2D4Kb5wM7OksIe-nzOBRxbxT0yn7/view?usp=sharing",
      },
      {
        author: "lecture 22",
        link: "https://drive.google.com/file/d/1zrudPe07z-yHfkC5v2HKSEGqsJwIqK2X/view?usp=sharing",
      },
      {
        author: "lecture 23",
        link: "https://drive.google.com/file/d/1r9MMl4XjleWKb5HoNs1kUYsL13u-E5ge/view?usp=sharing",
      },
      {
        author: "lecture 24",
        link: "https://drive.google.com/file/d/13beZ7VsQy1x02lU-hBzeInXqUq-bESrX/view?usp=sharing",
      },
      {
        author: "lecture 25",
        link: "https://drive.google.com/file/d/1TD4tFwGU1DDHkyAmlGCul1rOP81gXBel/view?usp=sharing",
      },
      {
        author: "Analog communication-AM & FM MCQ",
        link: "https://drive.google.com/file/d/1hGoo0wUKVplrjROAujHhDFL5lUhLTZYq/view?usp=sharing",
      },
      {
        author: "Analog communication-AM & FM Answers",
        link: "https://drive.google.com/file/d/1ZCG4HyBENGZo_dU1XsxFqgdaoAJWkKzO/view?usp=sharing",
      },
    ],
    "Digital Communications": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1z6vzQpw2DMGiNmAUQ9HZC-z5aHiP7R6j/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1b5MwmBuUzHIOiXkfxFymCan3J6dslmV8/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1CQQuPLVDeG5ziyKes_06LMh0du8WQ9wV/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1vQWx4iB5YpYrg7xCRErrikVQ5VTftiB1/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1hzvkjAk7az8Z1X3LFYs2J7cAeQSrWiEx/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1rHFTJX1Knu1-566de5Y4Jnawobi1Sbdw/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1UReCopCKpbMmB9TxXyGKk7t9CZtf-bp_/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1Pft3Yw8K1F1KRq4L8fFwF2LhxoiammGn/view?usp=sharing",
      },
      {
        author: "DIGITAL COMMUNICATION MCQ",
        link: "https://drive.google.com/file/d/1JUvsnCGVkgCg2rBA6kp09Ju_cuHRrXIX/view?usp=sharing",
      },
      {
        author: "DIGITAL COMMUNICATION Answers",
        link: "https://drive.google.com/file/d/14hTqzWfRMzAgrWOZEU9fm0W94zT38OzC/view?usp=sharing",
      },
    ],
    "Information Theory": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1-4ceF8X-8zrBzbi5Z_suweYsQHK2uD-r/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/14Z7CdJR1MyujQoCJXqipTOE9qqrHY6FW/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1LrOqQfeAQr_z14wocKqitissrXXj8CBx/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1_vsHdKWeq5iizFfZHAbycSOkg04ihy6V/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/16s2Z0Y_1thxCk95wfSK57MVDdUP_-FVK/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1s_wuNqgWabRqV1ITbj4SvN7LfNuceiqg/view?usp=sharing",
      },
      {
        author: "INFORMATION THEORY MCQ",
        link: "https://drive.google.com/file/d/1tySr3pn4GEA-dcZsr6miG14_n7PEev2B/view?usp=sharing",
      },
      {
        author: "INFORMATION THEORY ANSWERS",
        link: "https://drive.google.com/file/d/1D4H1o-vk8y8u_F91gedSN5S7gHsN7BEP/view?usp=sharing",
      },
    ],
    Communication: [
      {
        author: "Communication",
        link: "https://drive.google.com/file/d/1Wsu7lTkOr4pV9zmVrrYYp_FBf6bbxrPW/view?usp=sharing",
      },
    ],
    Miscellaneous: [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1XbPAieyJ7O3l51184b5V6ml3FH_yOesB/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1BJs-JiYWaJ0R2Yjsu8DttT8XCDCS0okA/view?usp=sharing",
      },
    ],
    "Noise in Communication": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1DWy6quDqRCRChUyQ1Hub18IIWUb1pjDi/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1EVbhSZYDwzGf6Wnghd_GEFDDTr24vpyo/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1X2wBCwBFgsDLEpAqQoEwjRM5R3cPm8CU/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1T7CmQCa2fHOO8FPIOMja_Azb_RbwLqI6/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1wcEiCyZd0YNVz6mhJH_Qmy9eU8KUZHU3/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/182g5srarj0GxJ8eBwsK75RNGG8GYO-fT/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1_s8vKzaLIEO4KhMCSLv9kVbU7wqOyoFT/view?usp=sharing",
      },
      {
        author: "NOISE IN COMMUNICATION MCQ",
        link: "https://drive.google.com/file/d/1fYkn4y6XmauU7z7hTxT54uzJcZZ9g11p/view?usp=sharing",
      },
      {
        author: "NOISE IN COMMUNICATION answers",
        link: "https://drive.google.com/file/d/1T7BnkeoFh4XpnfcKZag1qXOkXl9Awdzf/view?usp=sharing",
      },
    ],
    "Pulse code modulation": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1y4ASpHzlM3meAkDHj0dklFHZ9YvGgn86/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1h6c9amItNew0sW6TEa2_-_lXqiJw2bHL/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1gOEDJXAMsX7KzM83crrDukAeaipDK51R/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1Osl3EuoI8UFrDePn_aPpnbl3olBt9SF7/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1avpDjTqz5mzHruPEPQ_B-oDV2J5XqeXl/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/19omfTOHZ1x46KMvx1nLskpSBJs-NfSGL/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1jyhv69di1pkOTNHWwGzCV1sgKzN9YLlE/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1Sj4_aG1VgpFOQtd0ox4DNbuh-tAkhTge/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1YNT5nneIUhkJ1ehjnO23mx7pnB0HoXdg/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/147d_nrpFqbHdEUMljAu2lwxGFc4Ufikk/view?usp=sharing",
      },
      {
        author: "lecture 11",
        link: "https://drive.google.com/file/d/1fYtJhjXRpoklfwaSUDnW4CqL1ulkPyKQ/view?usp=sharing",
      },
      {
        author: "PULSE CODE MODULATION MCQ",
        link: "https://drive.google.com/file/d/1HWLAken-zOKDS_8OZ7um_LJ-1STiewth/view?usp=sharing",
      },
      {
        author: "PULSE CODE MODULATION answers",
        link: "https://drive.google.com/file/d/1Y-jWLCq3PdK7I4UTLuJmQV9_Z3jpR_1q/view?usp=sharing",
      },
    ],
  },
  "Control Systems for gate": {
    "control Systems": [
      {
        author: "written notes 1",
        link: "https://drive.google.com/file/d/1PX2iB70ZfkoeI0UFXXsJpzwrezhUr8nS/view?usp=sharing",
      },
      {
        author: "written notes 2",
        link: "https://drive.google.com/file/d/1lTD8StR4nQuUcQNt_it1QNLxLBoRlBSc/view?usp=sharing",
      },

      {
        author: "Basic of Control System",
        link: "https://drive.google.com/file/d/1OhbTE79NQrg81SOgkkcJeK6MUwxPKfg9/view?usp=sharing",
      },
      {
        author: "Basic of Control System answers",
        link: "https://drive.google.com/file/d/122tyAhIMj5CEZzd-vyqTXuwuf5ng74WB/view?usp=sharing",
      },
    ],
    "Bode plot": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1dCWTyUiiLyUluCCBnx21wEwTO7yJvVip/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1mstqPbTUGFe1Mzy6P9Mfpz-rKsnW8zeT/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1CUNs4d61An4Etg2LdCnnQ84jbCmSkQki/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1C1UVWI8xleHS0ylWFxhkR9eWecw8PU5i/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1C1UVWI8xleHS0ylWFxhkR9eWecw8PU5i/view?usp=sharing",
      },

      {
        author: "Bode Plot MCQ",
        link: "https://drive.google.com/file/d/1gP8-D7-xAlVgC-mLKyWJSg5ZwRLPM032/view?usp=sharing",
      },
      {
        author: "Bode Plot answers",
        link: "https://drive.google.com/file/d/1fBDvj9og1351aNTjpavzabh3FLDPWqIk/view?usp=sharing",
      },
    ],
    "Block diagram and SFG": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1FD6KKIgl7H3Mk3x041ok2qupeedeTeJq/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1-cZN9YbYrMknhxQkAY_W_3wFuomFsFYX/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1-F2QpiohMGPR7upBa21Liv340mmbNFXA/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1iUFi9E_uS5pZ5dUKdps33ZompD7OS1tz/view?usp=sharing",
      },

      {
        author: "Block diagram and SFG MCQ",
        link: "https://drive.google.com/file/d/1LocafS8L6SbuJpxd-Zqz0SWq7py1nLFu/view?usp=sharing",
      },
      {
        author: "Block diagram and SFG answers",
        link: "https://drive.google.com/file/d/1B8_avjYeynlb8zKRizIVe87uGpT7Rktl/view?usp=sharing",
      },
    ],
    "Compensatore and Controller": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1Mex2-cRxRSnsz2yVOp_1MPBQXmE7gcJ3/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1CU62dwyTo9YFRBysJLNVhEW_Lvy_rxHt/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1InKZu4oPgGryZjpRucp2QDifBjISspC5/view?usp=sharing",
      },
      {
        author: "Compensator and Controller MCQ",
        link: "https://drive.google.com/file/d/1eL8Buz8E-47psUOJKLw4dPykBxO3JDck/view?usp=sharing",
      },
      {
        author: "Compensator and Controller answers",
        link: "https://drive.google.com/file/d/16QK7FzDyMfjOyBNghyb94uxuLkA-hECO/view?usp=sharing",
      },
    ],
    "frequency Response of 2nd order system": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1bNjI5J5rvc7YEhn6lSbNM5JnbgTV2Bnh/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/10rr83V_iTg4u45HzBADlelrWhuOB-ELa/view?usp=sharing",
      },
      {
        author: "Frequency Response of 2nd Order System",
        link: "https://drive.google.com/file/d/1aRnccsaR2BSJtoxyzNrzt8jmXnbMVK8o/view?usp=sharing",
      },
      {
        author: "Frequency Response of 2nd Order System answers",
        link: "https://drive.google.com/file/d/1sXpuGIDQC57B_Mxp4bMv9H6_1C_lfTi2/view?usp=sharing",
      },
    ],
    "Mechanical and Electrical Systems": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/11FrqtpkEgvzI48PjUn8Wo3AIPGjNaArW/view?usp=sharing",
      },
    ],
    "Polar and Nyquist Plot": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1JmzjK84iU_mX7FnjnWwyvjZ94WwESAA2/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1iBi0Mp2hVmri4QbyFGVO_XsnYVDBCZ5g/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1mC3_K9SOI8YQd3OXEkVa0zA1je-pjTJx/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1b6dcc7sBFC0giI6atbheAq_myp9aD9co/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1XtWDsX_Ka7R4ZNOfG8kYdtIvyA6k63-f/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1M3UAcFGXdlwIkSa1JM5IE19j9dt797yu/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1g86vOSqvyLQep9CoznWelj0NzcsbwMST/view?usp=sharing",
      },
      {
        author: "Polar & Nyquist Plot MCQ",
        link: "https://drive.google.com/file/d/1hV101qRzHIT_gRbcL58I_MrkC27-Tnn4/view?usp=sharing",
      },
      {
        author: "Polar & Nyquist Plot answers",
        link: "https://drive.google.com/file/d/1NA3zdq_q2dSEbWSDRpt0VBW_G7h0OfPb/view?usp=sharing",
      },
    ],
    "RH Table": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1T60iv6iBexJkjwpKRaTV-ZqlVtEEy5tU/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1sbUiejk1_pTD_0-DOP40CKrBN2AlJlE1/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/15R9giwtulJKFP76v_raRYzrhcqxGm6hQ/view?usp=sharing",
      },
      {
        author: "RH Table  MCQ",
        link: "https://drive.google.com/file/d/1QOqEPTb-V8tnC6TS59DAlqyhI1W7dOkh/view?usp=sharing",
      },
      {
        author: "RH Table answers",
        link: "https://drive.google.com/file/d/1nRtXfpchMlOAi2TEorQeK_MKK7ZpD1E9/view?usp=sharing",
      },
    ],
    "Root Locus": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1y_Ew9G4Cjn3yF1YgpwgLhflCysPi_K74/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1P-lvZC-8ac09GbfS2wz1fx_2cnIk1TLM/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1iRbLuOGKXbE-pasFJhXqUuXcLXDRhfjc/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1TCChJmRXK8eKWAn42lRpZg3C2g2DFJbS/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1M__YRBVkN1mVQfcsD-z_SqAwcF33fMEs/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/14fEVZHJkUb61CPbdMdzma2HMgEpng7Cu/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/175ROYiROVtD2xApBYBdap06DQkuc3Upt/view?usp=sharing",
      },
      {
        author: "Root Locus MCQ",
        link: "https://drive.google.com/file/d/1leRR4vf1XImTWLOuqdwaHmv6Q0E0lLtx/view?usp=sharing",
      },
      {
        author: "Root Locus answers",
        link: "https://drive.google.com/file/d/13oIg2T-tZYUkoMjADNABKB0n4E382CNq/view?usp=sharing",
      },
    ],
    "State Space Analysis": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1W0ntXg50ZLDaauPB7cRExxN1D2ZnFO-h/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1SRc-Rau1NmbEHv-HN77ZrDNmd5B4Y2MW/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1l4HnuRnLz5HWwsMTTnQUwrbj3Yd3S1lj/view?usp=sharing",
      },
      {
        author: "State Space Analysis MCQ",
        link: "https://drive.google.com/file/d/1wTl8S4NkIz9PrOIQc-at5QstzT4JBSy1/view?usp=sharing",
      },
      {
        author: "State Space Analysis answers",
        link: "https://drive.google.com/file/d/1cpv7LMaMmwNN8GHxfF2dIuqhm0TcnmMv/view?usp=sharing",
      },
    ],
    "Time Response Analysis": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1H07l9OvUYkuM4bPil_qAlXE2tS0GZt8d/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1JBdavmVf4JsZpeT-OBiTN-l965Ekhnc7/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1jvTaUp9jlDmJuKPGs07YQXqcfXJwB4Xc/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1iWWdm67nmPbqW5skxZ_12MtibSszs0xK/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1FdoD5R4CqeYoHeeM8s8QckjgRulg7kue/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1dVRAzlz-gb4B6bKllakycN8lb3KbStao/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/159xIODm4-K9zS5LMUQbCBC6PFsWLt45E/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/18AFtALB8noutzjNo-SEsUh-gmL0uw5il/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1StaXao3O1FVJV8Ha5iOnDD8aB3jPG8qu/view?usp=sharing",
      },
      {
        author: "practice MCQ",
        link: "https://drive.google.com/file/d/133EvQd7A6e_MNROYsCOTLcnt9atLV9qY/view?usp=sharing",
      },
      {
        author: "Answers",
        link: "https://drive.google.com/file/d/1dhAqEzj-MAYmtQ5gfK-_bWG9bVLdehry/view?usp=sharing",
      },
    ],
  },
  "Digital Electronics for gate": {
    "ADCs AND DACs": [
      {
        author: "Digital Electronics",
        link: "https://drive.google.com/file/d/1lwwvrU-pO2FACQZ_p1LHennMQOfTvoUn/view?usp=sharing",
      },
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1qkJ45EboS3WdHKZlVpOW0uLLjPeBegb4/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1PY9S0XxlClMdl8pITvJ3msTaLzdn_mNM/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/19C-xOjyWZ2aG3xTFjITSZf4deyi9Kkx1/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1RlcnXXrCzRhybXvp7Kz-LoAGY2H3cb-7/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1MA4csp3HrU9j6KudpDcMQgpRLq7YCu02/view?usp=sharing",
      },
    ],
    "Boolean Theorems and Gates": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1wdlThCgUzwpSWvG4w0BbKBw1gS1CiaAM/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1HXNgHXv7VsnqxDlz4J6VvUYyVhlodlFt/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1nHE3ujSDuRNNLd8lNuk96AQBB9GIovI_/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1ff0NFUIZWOVVpk0NemFcvZgStmHy1t17/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/19zsQ-fVxgQc-QzYnAyWvR_R_BIGOpb3u/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1oR6D9jJmXWMXbYgT4k4fI7daSwsk5Xkv/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/14iHLD6YlpqPUI9_PIdjvhIuW2ns-N5Ac/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1BHj80Zqi-E_JTfUFxl4rWiBs4N_Rq56w/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1jh3kT_UQtRmWdVBCFU0Ip6fUpGDc1SGQ/view?usp=sharing",
      },
    ],
    "Combinational circuits": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1bwTnZV5SJjT0nJpfbK8qb8yTNxC1M8p2/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1n8CcaU-6bbCTep0y_zDNNMZzEUNGq4Ed/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1HhS4WTFDIhH5lLFDZNFQtgox-YgOtYLn/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1fLr3PPGl4JwNSd1wDrLxszXz4s2Kyhv8/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/10_UHcRJKfth8gtWmiHJVRfbVTCyXX_vO/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1bPZk6a63Su-rZsy7qJQtn5yfZUiF8Qau/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1aRN_y6NMFDihmouB7aXeZJJxyFEAVu6l/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1bEI_iE0tNToHKAIkRyqQiUEJNHxse5Y9/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/10yR2moziamvYW7dVOfiUaNhkhfprrQ7y/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1bbPeOenUuTbwi67jUSeDSn_-fX1wsEMV/view?usp=sharing",
      },
      {
        author: "lecture 11",
        link: "https://drive.google.com/file/d/1W3dybHGz5_kkGoDgvRoNyKiGtzUFO5t7/view?usp=sharing",
      },
      {
        author: "lecture 12",
        link: "https://drive.google.com/file/d/1DRMkHRCzlBsmTwuxeblSX1TyKyObftyu/view?usp=sharing",
      },
    ],
    "Miscellaneous topic": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1pQc8u9SavJucaHilJj70NO2JplJ5MlDm/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/12EtSoDvEju6Pd_xhZYC6QAkcZ_SzcVal/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1erBVMAKpJh5nVm8zJaRiIT9nb11Szkex/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1IejOqjY7aNqhTw1EFW5OKAmR3J-ah7Xw/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1lUfTJp23JmzFR3mdpbUo3HmPKxAGaUem/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1vwbPjQmSgYPRfkUK2DfXQVqYF-P5vknI/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1qefN3fCwCHfc6MK9vz_DOwiJeZE8znwL/view?usp=sharing",
      },
    ],
    "Sequential circuits": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1htqbgDPeL78UtvewljTDhUUKjJ7Nfdwl/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1EZg0yaMyhBx1Ih1ErZ-y0Qn998Ov1PL-/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1guBTz-xuex6PtXylBuLFfhR_O6QKdx4u/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1Ff02wDprWSPJNpUB9L-rGg7M7XEnYbPd/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1PdGGtD11Uq-EmhhpY094HOzTm5EjWfH6/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1aWzs2EID2jq6jFGp2XcJHgwpsJqdL4gD/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/14suwXl7YddmY-TmVLO22aMAFXIzCQqPD/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1_JaMo8ub9g7IkV7fHtlwXuFAXwBmgl7K/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/14XBfSKZ5JC0hpUBLWYe-GFaH4JDHAbSb/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1h9D5Myep3SK6NgCXBP7YBKn6refDf6TQ/view?usp=sharing",
      },
      {
        author: "lecture 11",
        link: "https://drive.google.com/file/d/1azIxuM3ObPtVef_9qVbUQnGxfVAchFmJ/view?usp=sharing",
      },
      {
        author: "lecture 12",
        link: "https://drive.google.com/file/d/1Xui07OXENByTjetguQFhjDNeKSnoCvd2/view?usp=sharing",
      },
    ],
    MCQs: [
      {
        author: "ADCs & DACs",
        link: "https://drive.google.com/file/d/1SJPIx2AkPWnm8ZkQ1bvoeR9duXxgwmzr/view?usp=sharing",
      },
      {
        author: "ADCs & DACs answers",
        link: "https://drive.google.com/file/d/1OB6lV6lw_KzZfnNyLS6ECzpbiu264yv3/view?usp=sharing",
      },
      {
        author: "Boolean theorems and GATES",
        link: "https://drive.google.com/file/d/1u908epzv9xfGzKrV99rDLGLFRYS8Jvzd/view?usp=sharing",
      },
      {
        author: "Boolean theorems and GATES answers",
        link: "https://drive.google.com/file/d/1EYa5pwoRvFI2z66lYz_S1Opwe7JctOn7/view?usp=sharing",
      },
      {
        author: "Combinational Circuits",
        link: "https://drive.google.com/file/d/11p5BNKtWo931stjR3wHms5iA_FK0gNxW/view?usp=sharing",
      },
      {
        author: "Combinational Circuits answers",
        link: "https://drive.google.com/file/d/1bilkmKcQ1UcXMCGMMYmLKETzUTeWdyAd/view?usp=sharing",
      },
      {
        author: "Sequential Circuits",
        link: "https://drive.google.com/file/d/13PDrAoEDjVYMQeHFOdMdLc2hnnaus1Hn/view?usp=sharing",
      },
      {
        author: "Sequential Circuits answers",
        link: "https://drive.google.com/file/d/1B1PKcIdPpEyTqX5qUeu8Uv4vwzUaACM0/view?usp=sharing",
      },
    ],
  },
  "Networks for gate": {
    "Network Theory": [
      {
        author:"ACE Network Theory",
        link:"https://drive.google.com/file/d/11EkMa2QpfMbeY8lHrLA9bQ2A64c_KSK4/view?usp=sharing",
      },
      {
        author: "Networks",
        link: "https://drive.google.com/file/d/1T8WHeuTagVSf0bCBXBykoB-eehps_wE4/view?usp=sharing",
      },
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1j5R9_YZmClSNtfi80OjNLmB-SF5bKrqC/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1Ih9kI4MjTOwRk021GQk60S-zEKINOTVE/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1u30AqMCXMBJ2jv4_iNFQjlvOKz0BK_Yv/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/12T--9mUEV0_QrGLGBv_zvGJrLZvdR9g_/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1yTzJHuF6kbb2o-FGU1TQz5u4xfBsNiQd/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1Im4ltHxYJfD8deXsQjGqnWeJnEyfcE7E/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1Dq-CHQq5Po1QfV80T1csZhMOQsmyIw1Q/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1UnOQIMEuHpNrkZVvQmZIcAqJ-BAtbMht/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1vlmGpr3THXYycnh8dEx_5jObNa9AOqHC/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/18aYDhH7gMR7TwPZ7XDchln6OnOOsdk0u/view?usp=sharing",
      },
      {
        author: "lecture 11",
        link: "https://drive.google.com/file/d/1VVZg31GsphPJx319tUJckf3i0W7UEtTd/view?usp=sharing",
      },
      {
        author: "lecture 12",
        link: "https://drive.google.com/file/d/1bMBKhLIJDGhdIFQO_a_cggduphcJGCzi/view?usp=sharing",
      },
      {
        author: "lecture 13",
        link: "https://drive.google.com/file/d/1BP9WahXjNlmBaO7X8az1YMSZhe_Yibjc/view?usp=sharing",
      },
    ],
    "Network Theorems": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1tgkg6jWXFGyHUQFd3dCh2_I0GG2bs_zs/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1FjEc5-zW4h5AOZ2-BTJx56eyukrRcuH0/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1rTOzbX6kSlS8FZctzHOPT1k8zhTYEonz/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1cYJiyjVFn9bejQDh-NnHhllVWoN1Zfme/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1C8DjK3Eq9wFtTs8lnI7PP8dE-AxRM2x_/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1O25rigdBvabLONW39OzdoyRd0QjleV5t/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/11xUftvQAZe7Ckcx-DyFBezNEqop3j7OC/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1otaQAyQPgW5UAtXx0Ff-Oq0HQDkyTFCM/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/19thBYW4ydj86xA_srb71AzHqcsOdo6nI/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1H9kcsxIUPw12_xH-sK51r83P88RYNx2L/view?usp=sharing",
      },
    ],
    "Single phase and 3 phase [1]": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1noZqnVbnvlKHplFf-SuZtTMqAtrq_xml/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1WjhY9XqAasNUD2pltA2N509hljcuFl4X/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1WDOSrGRJktHX7ENkIrqoPpwbicFF34KD/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1g0eN3JONhEJy0RRcPNvUm2TRCqa6JDbu/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1j5sKC_0-ivhFAirRPLeyghCrZ7fHZZMm/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/11KeRZYq5CV2a_K4tVKDiEFPiCKi817jT/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1o8oLKTmiInsBHRwCCO7N6tGBKF5gJ3F_/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1-mMGDY1dQWK9cIWkG7dIAxwgbuQEM2ha/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1033sNmBiNVTqVYcn6YTVzQd50eHFUnSC/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1JbALsn8PSbr799GU4eHOUiqLwzsY5nfh/view?usp=sharing",
      },
      {
        author: "lecture 11",
        link: "https://drive.google.com/file/d/1FFuZu1JrB4Uugo5wTpYXyOeOBPrcPgGK/view?usp=sharing",
      },
    ],
    "Single phase and 3 phase [2]": [
      {
        author: "lecture 12",
        link: "https://drive.google.com/file/d/1SaTpBsDqem7rzwJDXli3o8qTyCQGlRbp/view?usp=sharing",
      },
      {
        author: "lecture 13",
        link: "https://drive.google.com/file/d/1eqtnvXVoe2NiY5jONQ8YUOub3_S_wKfP/view?usp=sharing",
      },
      {
        author: "lecture 14",
        link: "https://drive.google.com/file/d/1eDlvOLd9JcVh1TrP6i9R6EomOkErT4Oc/view?usp=sharing",
      },
      {
        author: "lecture 15",
        link: "https://drive.google.com/file/d/1dDvkMoCxGvAIYhJM35t2XcG5tRFtl9vK/view?usp=sharing",
      },
      {
        author: "lecture 16",
        link: "https://drive.google.com/file/d/1gAZldrCahQNlAwYQDlvrkbg8J9czjEOA/view?usp=sharing",
      },
      {
        author: "lecture 17",
        link: "https://drive.google.com/file/d/1czSjkkZTXAX7soAM5TZSvFaCAMz2Do9Y/view?usp=sharing",
      },
      {
        author: "lecture 18",
        link: "https://drive.google.com/file/d/1VjftY-O0gzRjs92IUqlUElJkdIRQ2Bcd/view?usp=sharing",
      },
      {
        author: "lecture 19",
        link: "https://drive.google.com/file/d/12iNAa0i5qjaxzNpmA2SpmvpXGVkaxzhT/view?usp=sharing",
      },
      {
        author: "lecture 20",
        link: "https://drive.google.com/file/d/19Jh785BtX36PbMdrCa9RUtZeZTXMCa5L/view?usp=sharing",
      },
      {
        author: "lecture 21",
        link: "https://drive.google.com/file/d/1O5VQFn5aiAF43DnrVI1V1c5rX0WWos3I/view?usp=sharing",
      },
    ],
    "Transient Analysis": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1DpS4J2u_34qNZo5yY9wH6c8B2_jbnCdE/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/13ijWsy7X3u3VS0B8ewBi5h9fGedPov-H/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1ILHke3wd3BLtqntHoKGNv4ZBALYnfHJu/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1zmB8it3pfVz3urZvkNeJQFzWaf7pLyqH/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1dXSmJ8kp3vLl78vn4SF0RJEth0nl8Ob5/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1dXSmJ8kp3vLl78vn4SF0RJEth0nl8Ob5/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1aCwg7c3rbueKbu6bNZIdR6KJRHET97bh/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1bcWQ43ZqwyJnN72qxr99NMPnZiq0Zhdn/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1YYpURAakCsBuvTM_XQa414XNOSrSccNf/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1ZMxd3v-lBl1gfTskh7YWymIagbTqXOZp/view?usp=sharing",
      },
      {
        author: "lecture 11",
        link: "https://drive.google.com/file/d/1AbfhcSuJ3XIv76wfhB6ZVGEAfGTDNvkx/view?usp=sharing",
      },
      {
        author: "lecture 12",
        link: "https://drive.google.com/file/d/1LsXukZWq9TsCB3BmE14xVChggo6x6x3q/view?usp=sharing",
      },
      {
        author: "lecture 13",
        link: "https://drive.google.com/file/d/1lmBz8MPOMQoV7Jq9LlvYInXwlu6ra7LK/view?usp=sharing",
      },
      {
        author: "lecture 14",
        link: "https://drive.google.com/file/d/1aOrSFdw4Rm8dYxX5_tVQw0SHnXecCANR/view?usp=sharing",
      },
    ],
    "Two port Network": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1NXn0PiWnETbLv-aT4peoI-v3Le18SZDu/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1nDrW96QxBHHPTQ7SuCm-JwYJkj2N0Avh/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1tfQyMooKim7bVa5LvVF8cAkVGxZ9nNQn/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1a_jsxV7yHMFLpmBtkCf_4N6jPd7Rj4zm/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1LVasT6mYPJSVY8mYF9vJsgsTARPkphJ4/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1ewAjCRtamNPk-L9oZADgXUrU5eZiGtI5/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1PsQThbAiP9K8F6TisDTvBtl17s7h0p7W/view?usp=sharing",
      },
    ],
    MCQ: [
      {
        author: "Basics of Network Thoery",
        link: "https://drive.google.com/file/d/1uM6tyqqRRe7DzzfRPWss7wsZGK3OEWAJ/view?usp=sharing",
      },
      {
        author: "Basics of Network Thoery answers",
        link: "https://drive.google.com/file/d/1EwG4VwvcTeixmi5Dg5pf_xKdyWzLm3N7/view?usp=sharing",
      },
      {
        author: "Basics of Network Thoery",
        link: "https://drive.google.com/file/d/12zexiHaQ5zgxc08KmvVs7o3igdhmsIXF/view?usp=sharing",
      },
      {
        author: "Basics of Network Thoery answers",
        link: "https://drive.google.com/file/d/1KZI3Dpu7HMpQegqDKm9qMa6BYu98M3Fg/view?usp=sharing",
      },
      {
        author: "Network Theorems",
        link: "https://drive.google.com/file/d/1YnMGDvNDzWL5lXc-GIY6fUPAjqJdgizG/view?usp=sharing",
      },
      {
        author: "Network Theorems answers",
        link: "https://drive.google.com/file/d/1n9AAhtbZ_l_g4AHyeZKTTewK5-n59iyC/view?usp=sharing",
      },
      {
        author: "Single Phase & 3-Phase AC Circuit",
        link: "https://drive.google.com/file/d/12VVIY27n5wY-iCUwZI1s9Hte4CRGefKg/view?usp=sharing",
      },
      {
        author: "Single Phase & 3-Phase AC Circuit answers",
        link: "https://drive.google.com/file/d/13HHPYJQmdEAKbWFgkkqHXu2_FH0y2Bop/view?usp=sharing",
      },
      {
        author: "Transient Analysis",
        link: "https://drive.google.com/file/d/1JtYXHGY35Rc2aUxno8GqA5p6DIPZb1fb/view?usp=sharing",
      },
      {
        author: "Transient Analysis Answers",
        link: "https://drive.google.com/file/d/1BgP6XnXJ31QKGuIPM2hIois3JzShACi7/view?usp=sharing",
      },
      {
        author: "Transient Analysis 2",
        link: "https://drive.google.com/file/d/1wLzb3urXNQ3z5xIiWmFtcavl0Fo-O1L8/view?usp=sharing",
      },
      {
        author: "Transient Analysis 2 answers",
        link: "https://drive.google.com/file/d/1ohFDp_mV-FCLpypYJ_C9n3JfV5SXYDLJ/view?usp=sharing",
      },
      {
        author: "Two Port Network",
        link: "https://drive.google.com/file/d/1GEVdFdMEN6OeOnBE1VpcVYfAg_64t_Pj/view?usp=sharing",
      },
      {
        author: "Two Port Network answers",
        link: "https://drive.google.com/file/d/10bcdDMehoIrLhIsPGuYq5KTGcZLdRbtF/view?usp=sharing",
      },
    ],
  },
  "EDC for gate": {
    "Basics 1": [
      {
        author:"ACE Academy Electronic Devices",
        link:"https://drive.google.com/file/d/1tV_hIlPaxLozGKxfxuzVN3gNQTbvucxH/view?usp=sharing",
      },
      {
        author: "Electrical Materials",
        link: "https://drive.google.com/file/d/17AGYZApIz7PhoLZc2-a2NTmOVdDHxK57/view?usp=sharing",
      },
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1tnqZVFWDH-DMZXh_5--cfQ8D1P-lR_1J/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1EJ-mfvqY1hCN8JGOu6A4BaVZu3az07SI/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/19txS73GWh1abvcXm34W1wHEFfJIUFRZ4/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1iPkZgX_nlRF5nbnplUDSaCfbX4QOf55l/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1UOLz7eczgvN1G2bwPRKFhr7_qoIN0ZFg/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1kY1HX59NKHoGJ3cAqK32uJ_-sivDX5ly/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/14EEE1BYzNfBuI_471Zvk-K5BOBi2N4D1/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1SOKcjbqolhWFHL1nkmn5Y_uRU12X78aC/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1EAd-82QTK5OFQfoa2ntAVePdaNUddROF/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1h1I45hswnRekdpJDqtHvCvTeJhFMP2YJ/view?usp=sharing",
      },
      {
        author: "lecture 11",
        link: "https://drive.google.com/file/d/1AZSeJZ7jfuYVMVkB22CZsTXljJUdEsXR/view?usp=sharing",
      },
      {
        author: "lecture 12",
        link: "https://drive.google.com/file/d/1zK8d6zRIdHaqYIEEdE4b8FB8l4ibQuwr/view?usp=sharing",
      },
    ],
    "Basics 2": [
      {
        author: "lecture 13",
        link: "https://drive.google.com/file/d/16F-M0XaDFUeeByHgFsmTPJOVlqnznK8o/view?usp=sharing",
      },
      {
        author: "lecture 14",
        link: "https://drive.google.com/file/d/1k_9TPnxBf_eXzg1aOLSpzncE3lxYfO2-/view?usp=sharing",
      },
      {
        author: "lecture 15",
        link: "https://drive.google.com/file/d/10b9yh3bUaGJ2NT-e3maOph2ln3lgk7bF/view?usp=sharing",
      },
      {
        author: "lecture 16",
        link: "https://drive.google.com/file/d/1rUcgKcxcqnYI3-Ge9MwPa1PV-nXoKdNR/view?usp=sharing",
      },
      {
        author: "lecture 17",
        link: "https://drive.google.com/file/d/1uKSSZw8fmFRFIO1TR-hMlmxbVC28zgnS/view?usp=sharing",
      },
      {
        author: "lecture 18",
        link: "https://drive.google.com/file/d/1T0EX8cjeLvMNNxonmeVd9fvfI8RQsFFf/view?usp=sharing",
      },
      {
        author: "lecture 19",
        link: "https://drive.google.com/file/d/1aG_e-G36VqLYfXOLmE2OdbGCJjfReq_3/view?usp=sharing",
      },
      {
        author: "lecture 20",
        link: "https://drive.google.com/file/d/1jJw9wE9BUeZIppUQhhY_Z21QMZVkkkV-/view?usp=sharing",
      },
      {
        author: "lecture 21",
        link: "https://drive.google.com/file/d/1IMdGXy7y4SPjGmM5nDbQfS046Q2tlTA7/view?usp=sharing",
      },
      {
        author: "lecture 22",
        link: "https://drive.google.com/file/d/16PkXEnEmK9sJ9gdMaGgOZzYUeQdzE9Gj/view?usp=sharing",
      },
      {
        author: "lecture 23",
        link: "https://drive.google.com/file/d/1Pl1deVbd3fEFZsBKFdYj0bK6gc-G7KNd/view?usp=sharing",
      },
      {
        author: "lecture 24",
        link: "https://drive.google.com/file/d/1r1qjg1QqC86gx2ejkt5GSy-zVgJexKeF/view?usp=sharing",
      },
    ],
    "Bipolar Junction Transistor": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1NltTbhQO4nOW-RByfczjf-BJNJ6CSHXm/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1j8qqMP21IYDWxUACFE8OnFUUMaEocHn2/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/11s5xEFnv3xwh956bLd6Ie8z012lieigS/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1H6BlqfgkDBJ9meX3YpQesGKOTGa6u-UF/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/19fo6QWGacDyCgYXUtQyT1v751_pHYsNv/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1MHR3oOEi_H-iDcSBOyUuGqHxD7eswcm3/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1lX-_s0j8-ORl7u437fbHjtvKzQ8AVex6/view?usp=sharing",
      },
      {
        author: "Miscellaneous 1",
        link: "https://drive.google.com/file/d/1Zm-0qFB1gPGZ0VYuB9XyS0sIqF5JMceB/view?usp=sharing",
      },
      {
        author: "Miscellaneous 2",
        link: "https://drive.google.com/file/d/1NASYsCb4tpnMad5u14pQ1hfl75vl4qQF/view?usp=sharing",
      },
      {
        author: "Miscellaneous 3",
        link: "https://drive.google.com/file/d/1gLoC7kZ_RKLI3RKG3UTPcWl_VCgRY4Vq/view?usp=sharing",
      },
    ],
    "Mos Capacitor": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1ORBDmLYZThXeX2gMsl83OK3ip7n0ettC/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1_HVL6MeZnbKBoG4z7ho2FvjMwKKjUfzB/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1YBZN6rQGXJ_NDGiGULiM5S4BOJHbsDsT/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1Pb_wr8I6yX9CoUY12qnSXfVJ0OmlRbsX/view?usp=sharing",
      },
      {
        author: " lecture 5",
        link: "https://drive.google.com/file/d/1MMXBV7_fGBnehKiM_TcUfwfd2XQIEdgL/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1-YtmzhyPLYsU9DpALYH8kdkiGgZj6ura/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1Bpg639kocemx4u5USChAxnfhrqqoNA94/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1d1BhzQhjX_dWEdIhJOmYHy0x_dgwV312/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/158PstefM93Mav13rVUcXEZDvqndmQD85/view?usp=sharing",
      },
    ],
    MOSFET: [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1CyAI27gb8aeGNWbyaDaa2YY-reha7wg1/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/10HHqL241H_F-ENzeLsPrJjtvM1ZqqGLa/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/19XOKo1Sq4lFMDVJ6tIWWAikpbwPOnZ6a/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/12mUhabg3fT2emVUXmPjlgZ0gR9RJTlZf/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1uORwiyemI6XUjjfEJ-iVce8ps4Gh_yM8/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1uztOhK-lXeo2mu6nH-XltwJUoFR-mZne/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1qPAvGPNirk4h5n1qBtqJP1dAWW6RAbPQ/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1I1Fs2CmjkmwRuVZ2bvPGqJV7P_YXdOGs/view?usp=sharing",
      },
    ],
    "P N junction Diode": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1wNEhSn_P3p-Xl10pUbCafD0CFx9iJO4q/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1wdNf5vMv8zNw014qQhZFBvqfon6ozyd9/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/10SStd_E5CnbCIeaV4Lw5ObR52DhWJyXi/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1dZqEPF03cFXUXP5YQvtVcZ3GgV9fp_QB/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1nrs_mr9rEVQNgMImsWCUET1NSjN8lTqv/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1nAKAeYYKzS7BQ0LUa-uIDo3TRJlXWqsd/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/18H7bt64RkEkjUJ49NCttvZz3iGQ10aDv/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1fZzwrytsyJp7vC9OsCI6H4EECnM8vz8y/view?usp=sharing",
      },
    ],
    PYQs: [
      {
        author: "Basics of SC Physics",
        link: "https://drive.google.com/file/d/1dlk_rUP3HLIdFI4lZQ20ipzAoaImKq5x/view?usp=sharing",
      },
      {
        author: "Basics of SC Physics Answers",
        link: "https://drive.google.com/file/d/1NGQjjMTEGbM4GZPbZJWmS-eG9H6HV1sW/view?usp=sharing",
      },
      {
        author: "Bipolar Junction Transistor",
        link: "https://drive.google.com/file/d/1npzLyrBtrEIPm7cx6K-pRbArjTSZNOlg/view?usp=sharing",
      },
      {
        author: "Bipolar Junction Transistor Answers",
        link: "https://drive.google.com/file/d/1t7_UmBrP-c6f4by9I1NEF5iI7AyjECrG/view?usp=sharing",
      },
      {
        author: "MOSFET",
        link: "https://drive.google.com/file/d/1Hocn5cUvAWs4pWgKuPJtR9CHv-bm4uXH/view?usp=sharing",
      },
      {
        author: "MOSFET Answers",
        link: "https://drive.google.com/file/d/1FlFM_tu6-ip5riSdax3GvHEYrcNK3i3m/view?usp=sharing",
      },
      {
        author: "PN Junction Diode",
        link: "https://drive.google.com/file/d/1Go59QiKQokpq4IBTGivt7IDM5tUrYJjw/view?usp=sharing",
      },
      {
        author: "PN Junction Diode Answers",
        link: "https://drive.google.com/file/d/1XAX1It_OdsXMais9awXijIwyvYr_erZo/view?usp=sharing",
      },
    ],
  },
  "Signals and Systems for gate": {
    "Introduction 1": [
      {
        author: "Notes",
        link: "https://drive.google.com/file/d/1et7__vx4F-lcIdEDGSRV138Si2ehQ6V3/view?usp=sharing",
      },
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1wa7iXHBgMKhkPinjg1P4JB2AokPfnMia/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/19uRGTl3JUkCSoAKFfZ98npWwZxnm2rzY/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1htV-mej4fxUJD9ADAx637bEMRnNKYzp-/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/10YTv0jQiq-mURf0m-5FTLJYHSMCFLqSU/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1UR5mfmPTydw22OXD7U0Ku_dksTaZLGit/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1e8tAV3gGYO9nrIrwLFuq1dCnFcGAYxNG/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1q-yDboQpzGYtY0D-JthTHzwxRt1OLJCa/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1zqPWuev6BxNki1Rx8BLqHyhTjG9gi3Wo/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1k9Z3N8tho6l-L1WBkY6uNMVyVc_66oQv/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1rfNh-FoHkzi2C2_-qnmYILlUuOOviX9j/view?usp=sharing",
      },
    ],
    "Introduction 2": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1a2w4yYXMIzj_CuR7X2dY1cTwMrp9YLQQ/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1UQaMCwhrnSxfbnoZLvSpGcgdSkIMjj02/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1kOPCoFNbAQwY6iBET0t8EGbAFPgYnqQk/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1Gg3dnH8h77r6QAHRPL9__Za59Uq4diEC/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1RgI4S6FWpe-m1mC5JfuJ0YKjIK5MnQke/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1WXgp-46c1YCHLmxZdjCYI6SgA1QAdj6_/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/10Qo1mbPOsrGBiVy4u7tcejwbXgT1GBSr/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1hTZd6mM-HqnfIKz8C3VEeT5tHs48gu74/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/1sMCXURmiC5pKY4PYxpFV40lhrOyfRSjH/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/1jNkUmNZWhf5hyTGqQEeWKAluleLl70wU/view?usp=sharing",
      },
    ],
    "Continous time fs": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/19BLBsSmrKu-Tdy-I34gqLsrU8ElUGbUX/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1eKMkXGZCsPUrFXyLuFwD1caqbxOivXRF/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1KBjuQsmm5c0uRYd-5McwEmzjqm8mi9cp/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1pu-ZPC4q5lmtVOGp36zxNtUQrqaLWtEZ/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1ALi-v0TFOfigVj-MkSEOmjRP5w9WzF3p/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1OnKANGmUXPTz19ueARib4hh8gtoqnNZX/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1TNI0iLOpP15laq0F10Ojgb59OGwOyY-R/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1QX7la0Em-umwKW9VUxiK5khlo6uVj55K/view?usp=sharing",
      },
    ],
    "Continous time FT": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/14kDKBHnCpn0aCXzef8oSIaXuQeI8H___/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/16GADBrP3KukOQ1r8xabDg3s3tuSuNZb5/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1OPUmEr-yhjIQin0CUtZafrPU7DgsbYI5/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1Tl0K2OPgbpK3vGw41zzlXIu8ry0esB2s/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1PGTwxMVsfcXF530ACHgylUvdAYdkURI_/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/10tUOAUl4HeUl1LbdJAtMEfYkLfsWN2i-/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/14PrzrEPPRBC9qe_S6xzePsi2fY8AUKc5/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/1akGUZ38T3XCEXQipiWISoegnUfVNxZ83/view?usp=sharing",
      },
      {
        author: "lecture 9",
        link: "https://drive.google.com/file/d/10DLZFro6oE9GSGu9_DTRuiwp93aD0jtx/view?usp=sharing",
      },
      {
        author: "lecture 10",
        link: "https://drive.google.com/file/d/13TZ7qsWjg-YWQtjBnLPTnPjh7-_JJ5nw/view?usp=sharing",
      },
    ],
    "Discrete Fourier Transform": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/16qedYZqn1hfVGbEug5N7-MzXLY5k2kVa/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1sWgrBNe_b1wFna-N_1w_28VDeWoj5nCV/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1VS0f_P5nFIeZ8051tvjV1zj9eyRO1_Mv/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1R0s2lKKHXXxwOoOcH8FYwAM_uMslIzly/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1wj1QxRzwqOnORhv5_VqscEw4ecZUOPY8/view?usp=sharing",
      },
    ],
    "Laplace Transforms": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1ok2N9fzjWSniKSimN7ip6IodSFC_gO8z/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1BWM8NOZunSPS0A3GZGrukVA8d0S9pPV1/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1qh_HIVXjSWYqkP6wlJhVi_1wq5Lo6z3K/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/10Xm9-awYhy7B_RVfQpnLU-h7U9Tf_T1I/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1L62PB7uUpd4sUxhlmPQvy187bvch4phe/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1EL60Olkdz-iVtnBapMJFWnwnfsc87NaN/view?usp=sharing",
      },
      {
        author: "lecture 7",
        link: "https://drive.google.com/file/d/1_CuDFrCn3EOdHaZN0zW6LpQcV1JEhQOO/view?usp=sharing",
      },
      {
        author: "lecture 8",
        link: "https://drive.google.com/file/d/11SGoyV_lQLPeDdVhK2_m4mavOq-ai_kT/view?usp=sharing",
      },
    ],
    "LTI Systems": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1l9KY0YiBHUeP9JKY4pO616OzG47XFD1e/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1qv2CwJb0s9wSroaQwPCusjW2WpGHjj3J/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/1IdS7RtNOfjGRo-6lVoek_Z0UjKB0eQeS/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1N9Ysje5LPc5tcLN1c2eraX3ObaCF1H98/view?usp=sharing",
      },
      {
        author: "lecture 5",
        link: "https://drive.google.com/file/d/1gonwi-K1LArPZBO58bPH9e2Mz8fwrTxH/view?usp=sharing",
      },
      {
        author: "lecture 6",
        link: "https://drive.google.com/file/d/1YeJhF4n6kZmR2r5GbPJgcQJ08zqQqCVq/view?usp=sharing",
      },
    ],
    "Sampling Theorem": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/12fkjU06ih_jGLxBb7wtXQSsipLdKVLox/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1ZwWyA7eSrDlIzOzm4hiF0f5Ozhnq0H6J/view?usp=sharing",
      },
    ],
    "Z Tranforms": [
      {
        author: "lecture 1",
        link: "https://drive.google.com/file/d/1H_f8-q_yJGG8dx4d77DznpMWkRhJkG3h/view?usp=sharing",
      },
      {
        author: "lecture 2",
        link: "https://drive.google.com/file/d/1gyKP0YE9cYnZg4vrCjgStO4QJTCsptFB/view?usp=sharing",
      },
      {
        author: "lecture 3",
        link: "https://drive.google.com/file/d/130X_-eN5zWp3gNUscmbMYPXC_YE0tcnf/view?usp=sharing",
      },
      {
        author: "lecture 4",
        link: "https://drive.google.com/file/d/1gNW4ogwAelwmf05OndQC85IKcU0SxxjM/view?usp=sharing",
      },
    ],
    PYQs: [
      {
        author: "Continuous Time Fourier Series",
        link: "https://drive.google.com/file/d/18SipcKouQd7yLYeIqIMaomkXGQhOlgs1/view?usp=sharing",
      },
      {
        author: "Continuous Time Fourier Transfer",
        link: "https://drive.google.com/file/d/14Wp_oTwcqD0-SAboYEtNpZs5bw0MPEOC/view?usp=sharing",
      },
      {
        author: "Discrete Time Fourier Transform",
        link: "https://drive.google.com/file/d/1pqgq4ZdX2Ql8rA7B5u29C09_tqVd-ope/view?usp=sharing",
      },
      {
        author: "Introduction to Signal and System",
        link: "https://drive.google.com/file/d/17lF4NUKtyuMaTSaS2Bbxjt4wlaUUp1Ys/view?usp=sharing",
      },
      {
        author: "LTI SYSTEM",
        link: "https://drive.google.com/file/d/15hazd_cA9vheBChWy_FBMly31-eDr8Va/view?usp=sharing",
      },
      {
        author: "Z-TRANSFORM",
        link: "https://drive.google.com/file/d/1gzBSjfKnta81VD1QNovB_7R7GqJVFRbO/view?usp=sharing",
      },
    ],
    "PYQs Answers": [
      {
        author: "Continuous Time Fourier Series",
        link: "https://drive.google.com/file/d/1XZTHOmdgiYGgl6vtRtOEaGB1yqRJJyKG/view?usp=sharing",
      },
      {
        author: "Continuous Time Fourier Transfer",
        link: "https://drive.google.com/file/d/1-Q88Ub3liXo-pFmnntMPcYnmZI4-BGR5/view?usp=sharing",
      },
      {
        author: "Discrete Time Fourier Transform",
        link: "https://drive.google.com/file/d/1KsymiCSzyWkEN2A6GRbziwK07tmL8nV6/view?usp=sharing",
      },
      {
        author: "Introduction to Signal and System",
        link: "https://drive.google.com/file/d/1IoiNbw4v-dY8ri7HBRRr08Ypi3QUA-wJ/view?usp=sharing",
      },
      {
        author: "LTI SYSTEM",
        link: "https://drive.google.com/file/d/1KvonjjgaDQnQWE_qBO4SwT0T0XWMvrG1/view?usp=sharing",
      },
      {
        author: "Z-TRANSFORM",
        link: "https://drive.google.com/file/d/1zDxuzs9baqjg5JbCgTOxtOLrQCAe45Uw/view?usp=sharing",
      },
    ],
  },
  "Some more Books for gate":{
    "MCQ":[
      {
      author:"MCQs Gate ECE",
      link:"https://drive.google.com/file/d/1IIT5giZq4yGrFUvWP-cjTrPNIGCmzD5p/view?usp=sharing",
    },
      {
        author:"Microwave Engineering",
        link:"https://drive.google.com/file/d/1oOAb_uY_Unoh-KojT19JWa_c0TJdEBUB/view?usp=sharing",
      },
      {
        author:"Measurement and Instrumentation",
        link:"https://drive.google.com/file/d/1ZVZk3IWXZUWd_229JOmr3BudJcNCtnPv/view?usp=sharing",
      },
      {
        author:"Electromagenetic Theory",
        link:"https://drive.google.com/file/d/1cmSDod1xVeonsTfKWpbaNg76DwKDSHL1/view?usp=sharing",
      }
    
    ],
  },
   
};

const cards = document.querySelectorAll(".card");
const container = document.getElementById("year-container");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const year = card.querySelector("h3").textContent.trim();
    const semester = card.querySelector("p").textContent.trim();
    const key = `${year} ${semester}`;
    showSubjects(key);
  });
});

function showSubjects(key) {
  container.innerHTML = `<h2 style="width:100%; text-align:center;">${key} Subjects</h2>`;
  const subjects = booksData[key];
  if (!subjects) {
    container.innerHTML += "<p>No data available yet.</p>";
    return;
  }

  for (let subject in subjects) {
    const subjectDiv = document.createElement("div");
    subjectDiv.className = "subject-card";
    subjectDiv.innerHTML = `<h3>${subject}</h3>`;

    subjects[subject].forEach((book, index) => {
      const id = `${key}-${subject}-${index}`;
      const savedRating = localStorage.getItem(id) || 0;

      subjectDiv.innerHTML += `
        <p><strong>${book.author}</strong> - <a href="${
        book.link
      }" target="_blank">Download</a></p>
        <div>
          ${[1, 2, 3, 4, 5]
            .map(
              (i) =>
                `<span style="cursor:pointer;color:${
                  i <= savedRating ? "orange" : "gray"
                }"
                   onclick="rateBook('${id}', ${i}, '${key}')">★</span>`
            )
            .join("")}
        </div>
        <hr/>
      `;
    });

    container.appendChild(subjectDiv);
  }
}

document.getElementById("backToHomeBtn").addEventListener("click", function () {
  location.reload();
});

function rateBook(id, rating, key) {
  localStorage.setItem(id, rating);
  showSubjects(key);
}
