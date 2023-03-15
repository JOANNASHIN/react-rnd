import Head from 'next/head'
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '@/components/layout';
import { getSortedPostsData } from '../library/posts';

interface HomeProps {
  allPostsData: {
    id: string;
    date: string;
    title: string;
  }[]
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <Layout>
        {/* 메인사진 */}
        <section>
          <h1>05/19</h1>
          <div>
            <span>신지은</span>
            <span>이지훈</span>
          </div>
          <figure>
            <img src="" alt="" />
          </figure>
          <p>결혼합니다.</p>
        </section>

        {/* 초대글 */}
        <section>
          <h1>초대합니다</h1>
          <p>
            서로가 마주보며 다져온 사랑을<br/>
            이제 함께 한 곳을 바라보며<br/>
            걸어갈 수 있는 큰 사랑으로 <br/>
            키우고자 합니다. <br/>
            저희 두 사람이 사랑의 이름으로<br/>
            지켜나갈 수 있도록<br/>
            앞날을 축복해 주시면<br/>
            감사하겠습니다.
          </p>

          <div>
            <p>
              <em>상준</em> ∙ <em>영애</em>의 장남 <b>지훈</b>
            </p>
            <p>
              <em>동옥</em> ∙ <em>미경</em>의 장녀 <b>지은</b>
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

      </Layout>
    </>
  )
}