import Head from 'next/head'
import invitationStyles from '../styles/invitation.module.css';
import Layout, { siteTitle } from '@/components/layout';

export default function Home() {
  return (
    <>
     <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin />
        <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Montserrat:wght@200;400;500;600&family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>

      <div className={invitationStyles.invitation}>
        
        {/* 메인사진 */}
        <section className={invitationStyles.main}>
          <h1 className={`${invitationStyles.date} ${invitationStyles.verticalDate}`}>
            <span>
              05
            </span>
            <em>
              /
            </em>
            <span>
              19
            </span>
          </h1>
          <div className={invitationStyles.name}>
            <span>이지훈</span>
            <span>신지은</span>
          </div>
          <figure className={invitationStyles.mainImg}>
            <img src="/images/sample2.jpg" alt="" />
          </figure>
          <p className={invitationStyles.text}>결혼합니다</p>
        </section>

        {/* 초대글 */}
        <section className={invitationStyles.invite}>
          <h1 className={invitationStyles.inviteTitle}>초대합니다</h1>
          <p className={invitationStyles.inviteText}>
            서로가 마주보며 다져온 사랑을<br/>
            이제 함께 한 곳을 바라보며 걸어갈 수 있는<br/>
            큰 사랑으로 키우고자 합니다. <br/>
            저희 두 사람이 사랑의 이름으로 지켜나갈 수 있도록<br/>
            앞날을 축복해 주시면 감사하겠습니다.
          </p>

          <div className={invitationStyles.who}>
            <p>
              <em>상민</em> ∙ <em>영애</em>의 아들 <b>지훈</b>
            </p>
            <p>
              <em>동옥</em> ∙ <em>미경</em>의 딸 <b>지은</b>
            </p>
          </div>
        </section>

        {/* 달력 */}
        <section>
          <h1>달력</h1>
          <div>
            05/19
          </div>
        </section>
        
        {/* 갤러리 */}
        <section>
          <h1>하나되는날</h1>
          <div>
            <figure>
              <img src="" alt="" />
            </figure>
          </div>
          <p>이미지를 클릭하시면 확대보기가 가능합니다.</p>
        </section>

        {/* 마음전하기 */}
        <section>
          <h1>마음전하기</h1>
          <figure>
            <img src="" alt="" />
            <span>우리의 앞날을 축복해주세요.</span>
          </figure>

          <div>
            <div>
              <span>신랑에게 연락하기</span>
            <a href="#">계좌번호</a>
            </div>

            <div>
              <span>신부에게 연락하기</span>
            <a href="#">계좌번호</a>
            </div>
          </div>

          <dl>
            <dt>&gt;혼주에게 연락하기&lt;</dt>
            <dd>
              <span>신랑 측 혼주</span>
              <div>
                <span>
                    아버지 <em>000</em>
                </span>
                <a href="#">계좌번호</a>
              </div>

              <div>
                <span>
                    어머니 <em>000</em>
                </span>
                <a href="#">계좌번호</a>
              </div>
            </dd>

            <dd>
              <span>신부 측 혼주</span>
              <div>
                <span>
                    아버지 <em>신동옥</em>
                </span>
                <a href="#">계좌번호</a>
              </div>

              <div>
                <span>
                    어머니 <em>배미경</em>
                </span>
                <a href="#">계좌번호</a>
              </div>
            </dd>
          </dl>
        </section>

        <section>
          <h1>함께가는길</h1>
          <div>
            지도
          </div>
          <nav>
            <button>티맵</button>
            <button>카카오네비</button>
            <button>네이버지도</button>
            <button>카카오맵</button>
          </nav>
          <div>
            지하철 이용시: 
          </div>
        </section>
        
        <section>
          <h1>함께가는길</h1>
          <div>
            지도
          </div>
          <nav>
            <button>티맵</button>
            <button>카카오네비</button>
            <button>네이버지도</button>
            <button>카카오맵</button>
          </nav>
          <div>
            지하철 이용시: 
          </div>
        </section>

      </div>
    </>
  )
}