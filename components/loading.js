import Layout from './layout'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <Layout>
            <div className="loading">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </Layout>
        )
  }