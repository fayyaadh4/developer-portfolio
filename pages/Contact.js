import Layout from "../components/Layout";

const Contact = () => (
  <Layout>
    <div>
      <h2>Contact details</h2>
      <ul>
        <li>
          <b>Address:</b> 33, Sheldon Road, Crawford, 7780. Cape Town. South
          Africa.
        </li>
        <li>
          <b>Telephone number: </b>0764056777
        </li>
        <li>
          <b>Email address: </b>
          <a href="mailto: fayyaadh.naidoo@gmail.com" target="_blank">
            fayyaadh.naidoo@gmail.com
          </a>
        </li>
        <li>
          <b>LinkedIn: </b>
          <a
            href="https://www.linkedin.com/in/fayyaadh-naidoo-1ab892100/"
            target="_blank"
          >
            Fayyaadh Naidoo LinkedIn Account
          </a>
        </li>
        <li>
          <b>GitHub: </b>
          <a href="https://github.com/fayyaadh4" target="_blank">
            Fayyaadh Naidoo GitHub Technical Profile
          </a>
        </li>
      </ul>
      <style jsx>{`
        li {
          list-style-type: none;
        }
      `}</style>
    </div>
  </Layout>
);

export default Contact;
