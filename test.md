try {
      const data = await getUser();
      
      alert(JSON.stringify(data, null, 2));
    } catch (e) {
      alert(String(e));
    }
