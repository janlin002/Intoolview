import Swal from "sweetalert2";

export const sweetAlert = () => {
  return Swal.fire({
    icon: "question",
    title: "The Internet?",
    text: "That thing is still around?",
  });
};
