// PUBLICATIONS DATA — edit paper information here.
// Keep the full author list, separated by commas. Do not abbreviate with et al.
// app.js shows the first 10 authors and an expandable remaining-author count.
// Use <b>Your name</b> to highlight it; * denotes equal contribution.
const papers = [
  {
    year: 2026,
    tag: "Under Review",
    status: "review",
    title:
      "RoboGaze: Evaluating Robot World Models via Structured Vision-Language Analysis",
    authors:
      "Minh-Loi Nguyen, <b>Nghiem Tuong Diep</b>, Hung Khang Nguyen, Minh Le, Doanh L. Thien, Tuan A. Tran, Hoang H. Tran, Dung D. Le, Vu N. Duong, Khoa D. Doan, Ngan Le, Daniel Sonntag, An T. Le, Vien Anh Ngo, Duy M. H. Nguyen, Tran V. Nhiem",
    venue: "Preprint, 2026",
    img: "robogaze-v2.webp",
    pdf: "https://arxiv.org/pdf/2606.28385",
    project: "https://robogaze-eval.github.io/",
  },
  {
    year: 2026,
    tag: "ICML",
    title:
      "FOCA: Future-Oriented Conditioning for Data-Efficient Vision-Language-Action Adaptation",
    authors:
      "Duc M. Nguyen*, <b>Nghiem T. Diep*</b>, Binh G. Nguyen*, Trong-Bao Ho, Doanh Le, Tan Q. Nguyen, Thien-Loc Ha, Nhiem Tran, Bao Thach, Nhat X. Tran, Tuan A. Tran, Artur Habuda, Philip Lund Møller, Tran Nguyen Le, Daniel Sonntag, Matthias Niepert, Khoa D. Doan, Vu Duong, Hung Ngo, Minh N. Vu, Duy M. H. Nguyen, An Thai Le, Ngo Anh Vien",
    venue: "International Conference on Machine Learning (ICML), 2026",
    img: "FOCA.png",
    pdf: "https://arxiv.org/pdf/2606.20867",
    project: "https://focavla.github.io/",
  },
  {
    year: 2025,
    tag: "NeurIPS",
    title:
      "ExGra-Med: Extended Context Graph Alignment for Medical Vision-Language Models",
    authors:
      "Duy M. H. Nguyen, <b>Nghiem T. Diep</b>, Trung Q. Nguyen, Hoang-Bao Le, Tai Nguyen, Tien Nguyen, TrungTin Nguyen, Nhat Ho, Pengtao Xie, Roger Wattenhofer, James Zou, Daniel Sonntag, Mathias Niepert",
    venue: "Advances in Neural Information Processing Systems (NeurIPS), 2025",
    img: "exgramed.jpg",
    pdf: "https://openreview.net/pdf?id=TjWdyVWBAG",
    project: "https://exgra-med.github.io/",
  },
  {
    year: 2025,
    tag: "ICML",
    title:
      "On Zero-Initialized Attention: Optimal Prompt and Gating Factor Estimation",
    authors:
      "<b>Nghiem T. Diep*</b>, Huy Nguyen*, Chau Nguyen*, Minh Le, Duy MH Nguyen, Daniel Sonntag, Mathias Niepert, Nhat Ho",
    venue: "International Conference on Machine Learning (ICML), 2025",
    img: "ICML_2025.jpg",
    pdf: "https://arxiv.org/pdf/2502.03029",
    code: "https://github.com/duyhominhnguyen/llama-adaptor-nonlinear",
  },
  {
    year: 2025,
    tag: "TMLR",
    title:
      "MGPATH: Vision-Language Model with Multi-Granular Prompt Learning for Few-Shot WSI Classification",
    authors:
      "Anh-Tien Nguyen, Duy Minh Ho Nguyen*, <b>Nghiem Tuong Diep*</b>, Trung Quoc Nguyen, Nhat Ho, Jacqueline Michelle Metsch, Miriam Cindy Maurer, Daniel Sonntag, Hanibal Bohnenberger, Anne-Christin Hauschild",
    venue: "Transactions on Machine Learning Research (TMLR), 2025",
    img: "TMLR_2025.jpg",
    pdf: "https://openreview.net/pdf?id=u7U81JLGjH",
    code: "https://github.com/HauschildLab/MGPATH",
  },
  {
    year: 2025,
    tag: "CIKM",
    title:
      "DistillCaps: Enhancing Audio-Language Alignment in Captioning via Retrieval-Augmented Knowledge Distillation",
    authors: "Thinh Pham*, <b>Nghiem Diep*</b>, Lizi Liao, Binh Nguyen",
    venue:
      "Proceedings of the 34th ACM International Conference on Information and Knowledge Management (CIKM), 2025",
    img: "distillcaps.png",
    pdf: "https://liziliao.github.io/papers/DistillCaps.pdf",
    code: "https://github.com/pgthinh/DistillCaps",
  },
  {
    year: 2023,
    tag: "NeurIPS",
    title:
      "LVM-Med: Learning Large-Scale Self-Supervised Vision Models for Medical Imaging via Second-Order Graph Matching",
    authors:
      "Duy M. H. Nguyen, Hoang Nguyen, <b>Nghiem T. Diep</b>, Tan N. Pham, Tri Cao, Binh T. Nguyen, Paul Swoboda, Nhat Ho, Shadi Albarqouni, Pengtao Xie, Daniel Sonntag, Mathias Niepert",
    venue: "Advances in Neural Information Processing Systems (NeurIPS), 2023",
    img: "NeurIPS_2023.jpg",
    pdf: "https://arxiv.org/abs/2306.11925",
    code: "https://github.com/duyhominhnguyen/LVM-Med",
  },
];
