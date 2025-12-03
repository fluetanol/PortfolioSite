

/**
 * 
 * 가로로 꽉 찬 섹션 컴포넌트를 생성하고 싶을 때 사용하는 부모 컴포넌트.
 */

export default function FullSection({children} :{children : React.ReactNode}){
    return(
         <section className="flex min-w-[50vw] max-w-full h-screen p-4 gap-6 justify-center items-center">
            {children}
         </section>
    )
}