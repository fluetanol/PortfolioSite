
interface showOption{
    isOnceExecute? : boolean;
}

const show_fadein_ty6_style = "opacity-100 translate-y-0 transition-all duration-800"
const show_fadeout_ty6_style = "opacity-0 translate-y-6"
/**
 * ty6은 translate-y-6 의 약자입니다. (네이밍 컨벤션
 * 따라서 ty{N}은 전부 translate-y-{N}을 의미합니다.
 * 
 * 스크롤링 시 show 계열 함수들은 fade in 및 fade out 애니메이션을 적용합니다. 
 * @param param0 
 */
export const show_fadeinout_ty6 = (params? : showOption) : IntersectionObserverCallback => {
  
    const { isOnceExecute } = params ?? {};
 
 
    return (entries,  observer) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove(...show_fadeout_ty6_style.split(" "));
      entry.target.classList.add(...show_fadein_ty6_style.split(" "));

     if(isOnceExecute){
        observer.unobserve(entry.target);
     }

    } else if(isOnceExecute === false) {
      entry.target.classList.add(...show_fadeout_ty6_style.split(" "));
      entry.target.classList.remove(...show_fadein_ty6_style.split(" "));
    }
  });
    }
}